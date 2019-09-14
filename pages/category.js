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

export default function Category({ categories }) {
    const [type, setType] = React.useState('info');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');

    const classes = useStyles();

    function handleClose() {
        setOpen(false);
    }
    async function handleDelete(categories, id) {
        const res = await fetch(`http://localhost:3000/api/category?id=${id}`, {
            method: 'DELETE',
        });
        const text = await res.text();
        let data = text ? JSON.parse(text) : {};
        if (data.errorCode) {
            setType('error');
            setMsg(data.msg);
            setOpen(true);
        } else {
            let rIndex = categories.findIndex(category => category._id === id);
            categories.splice(rIndex, 1);
            setType('success');
            setMsg('删除类目成功！');
            setOpen(true);
        }
    }
    return (
        <Page title='类目管理'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>类目 ID</TableCell>
                            <TableCell align='left'>类目名称</TableCell>
                            <TableCell align='left'>类目权重</TableCell>
                            <TableCell align='left'>创建时间</TableCell>
                            <TableCell align='left'>修改时间</TableCell>
                            <TableCell align='left'>操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map(category => (
                            <TableRow key={category._id}>
                                <TableCell component='th' scope='row'>
                                    {category._id}
                                </TableCell>
                                <TableCell align='left'>
                                    {category.name}
                                </TableCell>
                                <TableCell align='left'>
                                    {category.weight}
                                </TableCell>
                                <TableCell align='left'>
                                    {moment(category.createTime).format('lll')}
                                </TableCell>
                                <TableCell align='left'>
                                    {moment(category.createTime).format('lll')}
                                </TableCell>
                                <TableCell align='left'>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={() =>
                                            handleDelete(
                                                categories,
                                                category._id
                                            )
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

Category.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3000/api/categories');
    const json = await res.json();
    return { categories: json.data };
};
