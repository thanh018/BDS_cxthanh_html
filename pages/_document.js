// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { currentEnv } from '~/config';
const fs = require('fs');
const { join } = require('path');
const dev = process.env.NODE_ENV === 'development';

class CustomHead extends Head {
    getCssLinks() {
        const {
            assetPrefix,
            files,
            __NEXT_DATA__: {
                buildId,
                page, // page name
            },
            // html,
        } = this.context._documentProps;
        if (!files || files.length === 0) {
            return null;
        }

        const cssArr = files.map(file => {
            if (!/\.css$/.exec(file)) {
                return null;
            }
            // const filePath = join(__dirname.replace(`/server/static/${buildId}/pages`, ''), file);
            // const criticalCssFilePath = join(__dirname.replace(`/server/static/${buildId}/pages`, ''), `out/${page}.css`);
            // const cssContent = fs.readFileSync(criticalCssFilePath, 'utf8');
            return dev ? (
                <link
                    key={file}
                    nonce={this.props.nonce}
                    rel="stylesheet"
                    href={`${assetPrefix}/_next/${file}`}
                    media="all"
                    className="full-css-load"
                />
            ) : (
                    <link
                        key={file}
                        nonce={this.props.nonce}
                        // rel="preload"
                        // as="style"
                        href={`${assetPrefix}/_next/${file}`}
                        // media={dev ? "all" : "print"}
                        className="full-css-load"
                    />
                );
        });

        if (!dev) { // inline critical css
            try {
                const pageName = page === '/' ? 'index' : page;
                const criticalCssFilePath = join(__dirname.replace(`/server/static/${buildId}/pages`, ''), `out/${pageName}.css`);
                const cssContent = fs.readFileSync(criticalCssFilePath, 'utf8');
                cssArr.unshift(
                    <style dangerouslySetInnerHTML={{ __html: `${cssContent}` }} />
                );
            } catch (e) {
                // file cannot found
            }
        }

        return cssArr;
    }
}

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            // useful for wrapping the whole react tree
            enhanceApp: App => App,
            // userful for wrapping in a per-page basis
            enhanceComponent: Component => Component
        });

        // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        // if (this.props.__NEXT_DATA__.page.indexOf('/hotelDetail') > -1) {

        // }
        return (
            <Html>
                <CustomHead>
                    {/* SET NO CACHE CONTROL IN META */}
                    <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="0" />
                    <meta name="google-site-verification" content="QW1E_wUxlwpqahZuocgMaZ15zrdW0wWsCYTZKW5N0H0" />
                    <meta name="format-detection" content="telephone=no" />
                    {/* CSS Files */}
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800,800i&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Exo&amp;display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                </CustomHead>
                <body className="home" data-auto-reload>
                    <Main />
                    <NextScript />
                </body>
                <script src="https://www.youtube.com/iframe_api"/>
                <script src="/static/js/jquery-3.4.1.min.js"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" /> 
                <script src="/static/js/bootstrap.min.js"/>
                <script src="/static/js/slick.min.js"/>
                {/* <script src="/static/js/auto-reload.js"/> */}
                <script src="/static/js/post-slide.js"/>
                <script src="/static/js/menu-scroll.js"/>
                <script src="/static/js/video.js"/>
                <script src="/static/js/show-video-popup.js"/>
                <script src="/static/js/slide-dialog.js"/>
                <script src="/static/js/countdown/jquery.countdown.js"/>
                <script src="/static/js/moment/moment.min.js"/>
                <script src="/static/js/countdown.js"/>
                <link rel="stylesheet" type="text/css" href="/static/lib/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
            </Html >
        );
    }
}

export default MyDocument;
