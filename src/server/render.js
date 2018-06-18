import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';
import configureStore from '../shared/redux/store.js';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter as Router } from 'react-router';
import App from '../shared/App';

export const handleRender = (req, res) => {
  const store = configureStore();
  const context = {};
  const html = renderToString(<Provider store={store}>
    <Router context={context} location={req.url}>
      <App />
    </Router>
  </Provider>);
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
};

export const renderFullPage = (html, preloadedState) => `
		<!doctype html>
		<html lang = 'en'>
			<head>
				<title> visualbydavidho </title>
				<meta name = 'viewport' content = 'width=device-width'>
				<meta name = 'description' content = 'photography-david-ho'>
				<link rel="icon" href="data:;base64,iVBORwOKGO=">
			</head>
			<body>
				<div id="root">${html}</div>
				<script src = '/client-bundle.js'> </script>
				<script> window.__PRELOADED_STORE__ = ${serialize(preloadedState)} </script>
			</body>
		</html>
	`;
