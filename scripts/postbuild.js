/* eslint-disable */

var shell = require('shelljs');

shell.echo('Building App for heroku...');
shell.exec('NODE_ENV=production && node ./scripts/setup.js');
shell.echo('Build Complete!');
