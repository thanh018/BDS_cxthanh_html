/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import "babel-polyfill";
import App, { Container } from 'next/app';
import React from 'react';
// import NextSeo from 'next-seo';
import Router from 'next/router';
// import SEO from '~/next-seo.config';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import AWSAppSyncClient from 'aws-appsync';
// import { Rehydrated } from 'aws-appsync-react';
// import { ApolloProvider } from 'react-apollo';

import createStore from '../store';
// import { isIE } from '~/utils/commonFunc';/
// import { initGA, logPageView } from '~/utils/analytics';
import { currentEnv } from '~/config';

// const client = new AWSAppSyncClient(currentEnv.app_sync);

// import '~/styles/pages/_app.scss';

const dev = process.env.NODE_ENV === 'development';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx});
    }
    return { 
      pageProps,
    };
  }

  // componentDidMount() {
  //   initGA();
  //   logPageView();
  //   Router.router.events.on('routeChangeComplete', logPageView);
  //   if (isIE()) {
  //     Router.router.push('/upgrade-your-browser', '/upgrade-your-browser.html');
  //   }


  //   if (dev) return;
  //   const stylesheet = document.getElementsByTagName('link');
  //   if (!stylesheet || !stylesheet.length) return;
  //   for (let item of stylesheet) {
  //     // if (item.className === 'full-css-load') item.removeAttribute("media");
  //     if (item.className === 'full-css-load') {
  //       item.as = 'style';
  //       item.rel = 'preload';
  //       // item.setAttribute('rel', 'preload');
  //       // item.setAttribute('as', 'style');
  //       item.classList.remove('full-css-load');

  //       const newItem = document.createElement('link');
  //       newItem.href = item.href;
  //       newItem.rel = 'stylesheet';
  //       document.getElementsByTagName('head')[0].appendChild(newItem);
  //       // item.removeAttribute("media");
  //     }
  //   }

  // }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        {/* Here we call NextSeo and pass our default configuration to it  */}
        {/* <NextSeo config={SEO} /> */}
        {/* <ApolloProvider client={client}>
          <Rehydrated> */}
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          {/* </Rehydrated>
        </ApolloProvider> */}
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
