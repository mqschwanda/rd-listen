import { writeHtaccess, buildWebpack } from './helpers';

writeHtaccess().then(() => {
  buildWebpack();
}).catch((e) => { console.log(e); });
