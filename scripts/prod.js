/* eslint-disable max-len */

import { writeFile, log, htaccess, shellExec, bashScripts } from './helpers';

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
      START NODE SERVER
    */
    log.header('starting server');
    shellExec(bashScripts.startServer).then(() => {
      /*
        DONE!
      */
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
