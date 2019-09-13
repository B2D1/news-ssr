import Page from '../layouts/main';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fetch from 'isomorphic-unfetch';
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function User() {
    const classes = useStyles();

    return (
        <Page title='用户管理'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>用户 ID</TableCell>
                            <TableCell align='right'>用户名</TableCell>
                            <TableCell align='right'>密码</TableCell>
                            <TableCell align='right'>注册日期</TableCell>
                            <TableCell align='right'>
                                最后一次登录日期
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map(user => (
                            <TableRow key={user._id}>
                                <TableCell component='th' scope='row'>
                                    {user.usr}
                                </TableCell>
                                <TableCell align='right'>{user.psd}</TableCell>
                                <TableCell align='right'>
                                    {user.createTime}
                                </TableCell>
                                <TableCell align='right'>
                                    {user.updateTime}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Page>
    );
}

User.getInitialProps = async ({ req }) => {
    const res = await fetch('/api/users');
    const json = await res.json();
    return { users: json.data };
};
