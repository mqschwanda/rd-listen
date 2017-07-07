import { exec } from 'shelljs';

export default function () {
  console.log('Starting app...');
  exec('NODE_ENV=production && babel-node ./imports/startup/server/index.js');
  console.log('App running!');
}
