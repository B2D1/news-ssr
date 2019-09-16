import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
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
const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label='first page'
            >
                {theme.direction === 'rtl' ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label='previous page'
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='next page'
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label='last page'
            >
                {theme.direction === 'rtl' ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </div>
    );
}

export default function Category({ categories }) {
    const [type, setType] = React.useState('info');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(2);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const classes = useStyles();

    function handleClose() {
        setOpen(false);
    }
    async function handleDelete(categories, id) {
        const res = await fetch(`http://localhost:8080/api/category?id=${id}`, {
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
        <React.Fragment>
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
                        {categories
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map(category => (
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
                                        {moment(category.createTime).format(
                                            'lll'
                                        )}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {moment(category.createTime).format(
                                            'lll'
                                        )}
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
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[2, 5, 10]}
                                colSpan={3}
                                count={categories.length}
                                rowsPerPage={rowsPerPage}
                                labelRowsPerPage='每页展示数'
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                labelDisplayedRows={({ from, to, count }) =>
                                    `${count}条记录的${from}-${to}条`
                                }
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
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
        </React.Fragment>
    );
}

Category.getInitialProps = async () => {
    const res = await fetch('http://localhost:8080/api/categories');
    const json = await res.json();
    return {
        shellTitle: '类目管理',
        pageTitle: '72 Kr | 类目管理',
        layout: 1,
        categories: json.data,
    };
};
