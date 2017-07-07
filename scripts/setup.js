/* eslint-disable */

var shell = require('shelljs');

shell.exec('./node_modules/.bin/webpack -p --progress --colors --config ./config/webpack.js');
