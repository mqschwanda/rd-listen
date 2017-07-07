/* eslint-disable */

var shell = require('shelljs');

module.exports = function() {
  console.log('\n############################\n# Building with webpack... #\n############################\n');
  shell.exec('./node_modules/.bin/webpack -p --progress --colors --config ./config/webpack.js');
}
