import Page from '../layouts/main';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const rows = [
    createData('Frozen yoghurt', 158, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function News() {
    const classes = useStyles();

    return (
        <Page title='新闻管理'>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>新闻 ID</TableCell>
                            <TableCell>新闻所属类目</TableCell>
                            <TableCell align='right'>新闻封面</TableCell>
                            <TableCell align='right'>新闻内容</TableCell>
                            <TableCell align='right'>新闻作者</TableCell>
                            <TableCell align='right'>新闻阅读数</TableCell>
                            <TableCell align='right'>发表日期</TableCell>
                            <TableCell align='right'>
                                最后一次修改日期
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.calories}
                                </TableCell>
                                <TableCell align='right'>{row.fat}</TableCell>
                                <TableCell align='right'>{row.carbs}</TableCell>
                                <TableCell align='right'>
                                    {row.protein}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Page>
    );
}
