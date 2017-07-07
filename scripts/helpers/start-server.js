/* eslint-disable */

var shell = require('shelljs');

module.exports = function() {
  console.log('Starting app...');
  shell.exec('NODE_ENV=production && node ./imports/startup/server/index.js');
  console.log('App running!');
}
