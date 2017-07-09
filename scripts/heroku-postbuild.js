import { shellExec, writeFile, log, htaccess, bashScripts } from './helpers';

/*
  CREATE `.htaccess` FILE
*/
log.header('creating apache config');
writeFile(htaccess).then((success) => {
  log.success(success);
  /*
    BUILD WEBPACK
  */
  log.header('building with webpack');
  shellExec(bashScripts.buildWebpack).then(() => {
    log.success('webpack built');
    /*
      DONE!
    */
  }).catch(log.error);
}).catch(log.error);
