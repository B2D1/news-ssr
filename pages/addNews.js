import Page from '../layouts/main';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Msg from '../components/Msg';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    menu: {
        width: 200,
    },
}));

export default function AddNews({ categories }) {
    const [type, setType] = React.useState('info');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [title, setTitle] = React.useState();
    const [author, setAuthor] = React.useState('');
    const [cover, setCover] = React.useState('');
    const [content, setContent] = React.useState('');
    const [category, setCategory] = React.useState('');

    const classes = useStyles();

    function handleClose() {
        setOpen(false);
    }
    function handleTitleChange(evt) {
        setTitle(evt.target.value);
    }
    function handleAuthorChange(evt) {
        setAuthor(evt.target.value);
    }
    async function handleCoverChange(evt) {
        const file = document.getElementById('cover').files[0];
        const formData = new FormData();
        formData.append('cover', file, file.name);
        const res = await fetch('http://localhost:3000/api/uploadImg', {
            method: 'POST',
            body: formData,
        });
        const json = await res.json();
        if (json.errorCode) {
            setType('error');
            setMsg(json.msg);
            setOpen(true);
        } else {
            setCover(json.data.filename);
        }
    }
    function handleContentChange(evt) {
        setContent(evt.target.value);
    }
    function handleCategoryChange(evt) {
        setCategory(evt.target.value);
    }

    async function handleSubmit() {
        if (!title || !author || !cover || !content || !category) {
            setType('warning');
            setMsg('字段不能为空！');
            setOpen(true);
            return;
        }
        const res = await fetch('http://localhost:3000/api/news', {
            method: 'POST',
            body: JSON.stringify({
                title,
                author,
                cover,
                content,
                category,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });
        const json = await res.json();
        if (json.errorCode) {
            setType('error');
            setMsg(json.msg);
            setOpen(true);
        } else {
            setType('success');
            setMsg('新增新闻成功！');
            setOpen(true);
        }
    }

    return (
        <Page title='新增新闻'>
            <Grid container spacing={2}>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='title'
                            fullWidth
                            label='新闻标题'
                            type='text'
                            name='title'
                            onChange={handleTitleChange}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            id='standard-select-currency'
                            select
                            required
                            fullWidth
                            value={category}
                            label='新闻类目'
                            onChange={handleCategoryChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin='normal'
                            variant='outlined'
                        >
                            {categories.map(option => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='author'
                            label='新闻作者'
                            fullWidth
                            type='text'
                            name='author'
                            onChange={handleAuthorChange}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='cover'
                            fullWidth
                            type='file'
                            name='cover'
                            onChange={handleCoverChange}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='content'
                            label='新闻内容'
                            fullWidth
                            type='text'
                            name='content'
                            onChange={handleContentChange}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Box mt={2}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleSubmit}
                        >
                            提交
                        </Button>
                    </Box>
                </Grid>
            </Grid>
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

AddNews.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:3000/api/categories');
    const json = await res.json();
    return { categories: json.data };
};
