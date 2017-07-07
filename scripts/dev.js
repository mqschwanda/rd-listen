/* eslint-disable */

var shell = require('shelljs');

console.log('Starting Dev Server with Webpack...');
shell.exec('NODE_ENV=development && webpack-dev-server -d --progress --colors --watch --config ./config/webpack.js');
