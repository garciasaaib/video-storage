import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

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

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Storage</title>
    <link rel="stylesheet" href="assets/app.css" type="text/css">
  </head>
  <body>
    <div id="app"></div>
    <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port 3000');
});
