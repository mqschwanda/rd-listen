import { exec } from 'shelljs';

// import webpack from 'webpack';
// import webpackConfig from '../config/webpack.babel.js';
//
// const bundler = webpack(webpackConfig);
//
// console.log('Starting Dev Server with Webpack...');
// bundler.run();


exec('NODE_ENV=development && node -r babel-register ./node_modules/webpack-dev-server/bin/webpack-dev-server -d --progress --colors --watch --config ./config/webpack.babel.js');
