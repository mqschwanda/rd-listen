import { shellExec, log, bashScripts } from './helpers';

/*
  RUN NODE SERVER
*/
log.header('starting node server');
shellExec(bashScripts.startServer).then((success) => {
  log.success(success || 'server started');
  /*
    DONE!
  */
}).catch(log.error);
