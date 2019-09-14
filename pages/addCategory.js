import Page from '../layouts/main';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Msg from '../components/Msg';

function AddCategory() {
    const [type, setType] = React.useState('info');
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [name, setName] = React.useState('');
    const [weight, setWeight] = React.useState('');

    function handleClose() {
        setOpen(false);
    }
    function handleNameChange(evt) {
        setName(evt.target.value);
    }
    function handleWeightChange(evt) {
        setWeight(evt.target.value);
    }

    async function handleSubmit() {
        if (!name || !weight) {
            setType('warning');
            setMsg('字段不能为空！');
            setOpen(true);
            return;
        }
        const res = await fetch('http://localhost:3000/api/category', {
            method: 'POST',
            body: JSON.stringify({
                name,
                weight,
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
            setMsg('新增类目成功！');
            setOpen(true);
        }
    }

    return (
        <Page title='新增类目'>
            <Grid container spacing={2}>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='name'
                            fullWidth
                            label='类目名称'
                            type='text'
                            name='name'
                            onChange={handleNameChange}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='weight'
                            label='类目权重'
                            fullWidth
                            type='number'
                            name='weight'
                            onChange={handleWeightChange}
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

export default AddCategory;
