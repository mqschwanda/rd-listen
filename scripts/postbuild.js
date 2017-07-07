import { exec } from 'shelljs';

console.log('Building App for heroku...');
// exec('NODE_ENV=production && babel-node ./scripts/setup.js');
exec('NODE_ENV=production && ./node_modules/babel-cli/bin/babel-node.js ./scripts/setup.js');
console.log('Build Complete!');
