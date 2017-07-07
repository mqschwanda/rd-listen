import { exec } from 'shelljs';

console.log('Building App for heroku...');
exec('NODE_ENV=production && node -r babel-register ./scripts/setup.js');
console.log('Build Complete!');
