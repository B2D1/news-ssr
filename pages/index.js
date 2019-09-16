import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import fetch from 'isomorphic-unfetch';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Msg from '../components/Msg';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        top: '40%',
        transform: 'translateY(-50%)',
    },
}));

export default function Index() {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        usr: '',
        psd: '',
    });
    const classes = useStyles();

    function handleClose(event, reason) {
        setOpen(false);
    }
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    async function handleLogin() {
        if (!values.usr || !values.psd) {
            setOpen(true);
        } else {
            // 发起请求
            const res = await fetch('http://localhost:8080/api/validUser', {
                method: 'POST',
                body: JSON.stringify({
                    usr: values.usr,
                    psd: values.psd,
                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            });
            const data = await res.json();
            if (data.errorCode) {
                setOpen(true);
            } else {
                Router.push('/home');
            }
        }
    }

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid container justify='center'>
                    <Typography variant='h4' component='h1'>
                        72 Kr 管理平台
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='email-input'
                            fullWidth
                            label='账户'
                            type='text'
                            name='text'
                            onChange={handleChange('usr')}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item sm={5}>
                        <TextField
                            required
                            id='password-input'
                            label='密码'
                            fullWidth
                            type='password'
                            name='password'
                            onChange={handleChange('psd')}
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
                            onClick={handleLogin}
                        >
                            登录
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
                <Msg
                    onClose={handleClose}
                    variant='warning'
                    message='用户名或密码错误!'
                />
            </Snackbar>
            <style global jsx>{`
                body {
                    background-image: radial-gradient(
                            #d7d7d7 1px,
                            transparent 1px
                        ),
                        radial-gradient(#d7d7d7 1px, transparent 1px);
                    background-position: 0 0, 25px 25px;
                    background-size: 50px 50px;
                }
            `}</style>
        </React.Fragment>
    );
}

Index.getInitialProps = async () => {
    return { pageTitle: '72 Kr | 请登录', layout: 0 };
};
