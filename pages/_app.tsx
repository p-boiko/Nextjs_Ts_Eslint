import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux, { StoreProps } from '../src/utils/redux/withRedux';
import initStore, { Store } from '../src/redux/store';
import { ActionWithPayload } from '../src/utils/redux/types';

class MyApp extends App<StoreProps<Store>> {
  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux<ActionWithPayload, Store>(initStore)(MyApp);
