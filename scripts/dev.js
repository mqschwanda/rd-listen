import { exec } from 'shelljs';

// import webpack from 'webpack';
// import webpackConfig from '../config/webpack.js';
//
// const bundler = webpack(webpackConfig);
//
// console.log('Starting Dev Server with Webpack...');
// bundler.run();


exec('NODE_ENV=development && babel-node ./node_modules/webpack-dev-server/bin/webpack-dev-server -d --progress --colors --watch --config ./config/webpack.js');
