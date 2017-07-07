/* eslint-disable */

var shell = require('shelljs');

shell.echo('Starting Dev Server with Webpack...');
shell.exec('NODE_ENV=development');
shell.exec('webpack-dev-server -d --progress --colors --watch --config ./config/webpack.js');
