import { writeHtaccess, buildWebpack, startServer } from './helpers';

writeHtaccess().then(() => {
  buildWebpack();
}).then(() => {
  startServer();
}).catch((e) => { console.log(e); });
