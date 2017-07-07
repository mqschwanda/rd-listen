/* eslint-disable */

var shell = require('shelljs');

console.log('Starting app...');
shell.exec('NODE_ENV=production && node ./imports/startup/server/index.js');
console.log('App running!');
