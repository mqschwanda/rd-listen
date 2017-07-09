/* eslint-disable max-len */

import { shellExec, log, bashScripts } from './helpers';

/*
  START DEV SERVER
*/
log.header('starting dev server');
shellExec(bashScripts.dev).then((success) => {
  log.success(success || 'dev server saterted');
  /*
    DONE!
  */
}).catch(log.error);

// import webpack from 'webpack';
// import webpackConfig from '../config/webpack.babel.js';
//
// const bundler = webpack(webpackConfig);
//
// console.log('Starting Dev Server with Webpack...');
// bundler.run();
