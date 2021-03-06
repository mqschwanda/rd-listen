import path from 'path';
import { log, removeFiles } from './helpers';

const appDir = path.resolve(__dirname, '../');


/*
  REMOVE AUTOMATED FILES
*/
log.header('remove files generated by scripts');
removeFiles(
  path.join(appDir, 'public/index.html'),
  path.join(appDir, 'public/bundle'),
  path.join(appDir, '.htaccess'),
).then((success) => {
  log.success(success || 'files removed');
  /*
    DONE!
  */
}).catch(log.error);
