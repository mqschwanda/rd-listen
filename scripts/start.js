/* eslint-disable */

var shell = require('shelljs');

shell.echo('Starting app...');
shell.exec('NODE_ENV=production && node ./imports/startup/server/index.js');
shell.echo('App running!');
