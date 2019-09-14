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
    img: {
        width: 100,
        height: 100,
        objectFit: 'cover',
    },
}));

export default function News({ news }) {
    const [type, setType] = React.useState('info');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');

    const classes = useStyles();

    function handleClose() {
        setOpen(false);
    }
    async function handleDelete(news, id) {
        const res = await fetch(`http://localhost:3000/api/news?id=${id}`, {
            method: 'DELETE',
        });
        const text = await res.text();
        let data = text ? JSON.parse(text) : {};
        if (data.errorCode) {
            setType('error');
            setMsg(data.msg);
            setOpen(true);
        } else {
            let rIndex = news.findIndex(_news => _news._id === id);
            news.splice(rIndex, 1);
            setType('success');
            setMsg('删除新闻成功！');
            setOpen(true);
        }
    }
    return (
        <Page title='新闻管理'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>新闻 ID</TableCell>
                            <TableCell align='left'>新闻标题</TableCell>
                            <TableCell align='left'>新闻类目</TableCell>
                            <TableCell align='left'>新闻作者</TableCell>
                            <TableCell align='left'>新闻封面</TableCell>
                            <TableCell align='left'>新闻内容</TableCell>
                            <TableCell align='left'>新闻阅读数</TableCell>
                            <TableCell align='left'>创建时间</TableCell>
                            <TableCell align='left'>修改时间</TableCell>
                            <TableCell align='left'>操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {news.map(_news => (
                            <TableRow key={_news._id}>
                                <TableCell component='th' scope='row'>
                                    {_news._id}
                                </TableCell>
                                <TableCell align='left'>
                                    {_news.title}
                                </TableCell>
                                <TableCell align='left'>
                                    {_news.category.name}
                                </TableCell>
                                <TableCell align='left'>
                                    {_news.author}
                                </TableCell>
                                <TableCell align='left'>
                                    <img
                                        className={classes.img}
                                        src={`http://localhost:3000/static/${_news.cover}`}
                                    />
                                </TableCell>
                                <TableCell align='left'>
                                    {_news.content}
                                </TableCell>
                                <TableCell align='left'>
                                    {_news.readNums}
                                </TableCell>
                                <TableCell align='left'>
                                    {moment(_news.createTime).format('lll')}
                                </TableCell>
                                <TableCell align='left'>
                                    {moment(_news.createTime).format('lll')}
                                </TableCell>
                                <TableCell align='left'>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={() =>
                                            handleDelete(news, _news._id)
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

News.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3000/api/news');
    const json = await res.json();
    return { news: json.data };
};
