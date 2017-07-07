import { exec } from 'shelljs';

export default function () {
  console.log('Starting app...');
  exec('NODE_ENV=production && node -r babel-register ./imports/startup/server/index.js');
  console.log('App running!');
}
