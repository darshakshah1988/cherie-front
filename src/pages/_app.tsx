import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';

import GlobalStyle from '../styles/reset';
import theme from '../styles/theme';
import store from '../redux/store';
import { setUser } from '../redux/slices/authSlice';
import { Provider } from 'react-redux';

NProgress.configure({ showSpinner: false });

export default function App(props: any) {
  const { Component, pageProps, router } = props;
  const { user } = pageProps;
  const Layout = Component.Layout || null;

  useEffect(() => {
    // If there is a property "user" and it's
    // value is not null then we will update our store for
    // the client side pages.
    if (user) {
      store.dispatch(setUser({ user: user }));
    }

    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router, user]);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* ----- By default, any layout, whether admin or normal, will also get a user object. ----- */}
          {Layout ? (
            <Layout user={user ? user : null}>
              {/* ----- Here our page will also get the default user object. And it will only come when the page will use methods like serverSideProps etc. ----- */}
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </Provider>
    </>
  );
}
