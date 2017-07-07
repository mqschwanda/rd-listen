import { exec } from 'shelljs';

console.log('Linting with ESlint...');
exec('eslint ./**.js');
