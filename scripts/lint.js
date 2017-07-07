/* eslint-disable */

var shell = require('shelljs');

shell.echo('Linting with ESlint...');
shell.exec('eslint ./**.js');
