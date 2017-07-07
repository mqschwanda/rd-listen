import path from 'path';
import fs from 'fs-extra';

// import { removeFile } from './helpers';

const appDir = path.resolve(__dirname, '../');
const publicDir = path.join(appDir, 'public');


// removeFile(path.join(publicDir, 'index.html')).then(() => {
//   removeFile(path.join(publicDir, 'bundle/index.js'));
// }).then(() => {
//   removeFile(path.join(publicDir, 'bundle/index.js.map'));
// }).catch((e) => { console.log(e); });


// Promise Usage
fs.remove(path.join(publicDir, 'index.html')).then(() => {
  fs.remove(path.join(publicDir, 'bundle')).then(() => {
    fs.remove(path.join(appDir, '.htaccess')).then(() => {
      console.log('Files Cleaned!');
    }).catch((e) => { console.error(e); });
  }).catch((err) => { console.error(err); });
}).catch((error) => { console.error(error); });
