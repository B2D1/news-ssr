import Page from '../layouts/main';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Msg from '../components/Msg';
import moment from 'moment';
moment.locale('zh-CN');

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

function User({ users }) {
    const [type, setType] = React.useState('info');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');

    const classes = useStyles();

    function handleClose() {
        setOpen(false);
    }
    async function handleDelete(users, id) {
        const res = await fetch(`http://localhost:3000/api/user?id=${id}`, {
            method: 'DELETE',
        });
        const text = await res.text();
        let data = text ? JSON.parse(text) : {};
        if (data.errorCode) {
            setType('error');
            setMsg(data.msg);
            setOpen(true);
        } else {
            let rIndex = users.findIndex(user => user._id === id);
            users.splice(rIndex, 1);
            setType('success');
            setMsg('删除用户成功！');
            setOpen(true);
        }
    }

    return (
        <Page title='用户管理'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>用户 ID</TableCell>
                            <TableCell align='left'>用户名</TableCell>
                            <TableCell align='left'>密码</TableCell>
                            <TableCell align='left'>注册日期</TableCell>
                            <TableCell align='left'>最后一次登录日期</TableCell>
                            <TableCell align='left'>操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user._id}>
                                <TableCell component='th' scope='row'>
                                    {user._id}
                                </TableCell>
                                <TableCell align='left'>{user.usr}</TableCell>
                                <TableCell align='left'>{user.psd}</TableCell>
                                <TableCell align='left'>
                                    {moment(user.createTime).format('lll')}
                                </TableCell>
                                <TableCell align='left'>
                                    {moment(user.updateTime).format('lll')}
                                </TableCell>
                                <TableCell align='left'>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={() =>
                                            handleDelete(users, user._id)
                                        }
                                    >
                                        删除
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
            >
                <Msg onClose={handleClose} variant={type} message={msg} />
            </Snackbar>
        </Page>
    );
}

User.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3000/api/users');
    const json = await res.json();
    return { users: json.data };
};

export default User;
