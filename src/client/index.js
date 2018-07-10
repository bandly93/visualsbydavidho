import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import configureStore from '../shared/redux/store';
import Routes from '../shared/navigationRoutes/Routes.js';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
