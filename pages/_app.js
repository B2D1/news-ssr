import App from 'next/app';
import Head from 'next/head';
import MainLayout from '../layouts/main';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{pageProps.pageTitle}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    {pageProps.layout !== 0 ? (
                        <MainLayout title={pageProps.shellTitle}>
                            <Component {...pageProps} />
                        </MainLayout>
                    ) : (
                        <Component {...pageProps} />
                    )}
                </ThemeProvider>
            </React.Fragment>
        );
    }
}
