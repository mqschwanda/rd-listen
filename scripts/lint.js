/* eslint-disable */

var shell = require('shelljs');

console.log('Linting with ESlint...');
shell.exec('eslint ./**.js');
