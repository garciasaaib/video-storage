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
  const serverConfig = { publicPath: webpackConfig.output.publicPath };
  // const serverConfig = { serverSideRender: true, publicPath, port: PORT };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else console.log('Production config');

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port 3000');
});
