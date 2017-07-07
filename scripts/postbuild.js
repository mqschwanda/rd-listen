/* eslint-disable */

var shell = require('shelljs');

console.log('Building App for heroku...');
shell.exec('NODE_ENV=production && node ./scripts/setup.js');
console.log('Build Complete!');
