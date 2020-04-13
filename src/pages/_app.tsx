import App, { AppProps, AppContext } from 'next/app';
import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import initStore, { Store } from 'store';
import { StylesProvider } from '@material-ui/core/styles';
import { removeJssStyles } from 'utils/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { CssBaseline } from '@material-ui/core';
import ClientOnly from 'utils/client-only';

interface AppPropsWithStore extends AppProps {
  store: Store;
}

class MyApp extends App {
  store = initStore();

  componentDidMount() {
    removeJssStyles();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.store}>
        <StylesProvider injectFirst>
          <>
            <CssBaseline />
            <Component {...pageProps} />
          </>
        </StylesProvider>
      </Provider>
    );
  }
}

const myApp = ({ Component, pageProps, store }: AppPropsWithStore) => {
  useEffect(() => {
    removeJssStyles();
  }, []);

  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <>
          <CssBaseline />
          <Component {...pageProps} />
        </>
      </StylesProvider>
    </Provider>
  );
};

// myApp.getInitialProps = () => {
//   if (!firebase.apps) {
//     firebase.initializeApp(process.env.FIREBASECONFIG);
//   }
// };

const AppWithStore = withRedux(initStore)(myApp);
//export default AppWithStore;

export default MyApp;
