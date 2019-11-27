/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Routes from './routes';

import './styles/global.scss';

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  root,
);