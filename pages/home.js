import Typography from '@material-ui/core/Typography';

export default function Home() {
    return (
        <React.Fragment>
            <Typography paragraph variant='h4' component='h2'>
                72 Kr
                作为一个有格调的新闻平台，致于提供最有深度、最有力度的新闻资讯！
            </Typography>
        </React.Fragment>
    );
}

Home.getInitialProps = async () => {
    return {
        shellTitle: '72 Kr Powered By B2D1',
        pageTitle: '72 Kr | 首页',
        layout: 1,
    };
};
