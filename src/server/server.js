import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

/** router part */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'; //Componente contenedor del GlobalState
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers/index';
import initialState from '../frontend/initialState';

/* toma el archivo .env y toma sus constantes */
dotenv.config();
const { ENV, PORT } = process.env;
const app = express();

/* console.log cualquiera */
if (ENV === 'development') {
  console.log('Development config');

  // Definiendo las dependencias instaladas
  // eslint-disable-next-line
  const webpackConfig = require('../../webpack.config');
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  // esto es solo un objeto con datos de configuracion
  // const serverConfig = { port: PORT, hot: true, serverSideRender: true, publicPath };
  // const serverConfig = { publicPath: webpackConfig.output.publicPath, serverSideRender: true };
  const serverConfig = { serverSideRender: true, publicPath: webpackConfig.output.publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else console.log('Production config');

const setResponse = (html) => {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Video Storage</title>
      <link rel="stylesheet" href="assets/app.css" type="text/css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
    </html>  
  `);
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port 3000');
});
