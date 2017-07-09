import { shellExec, log, bashScripts } from './helpers';

/*
  RUN TESTS
*/
log.header('starting tests');
shellExec(bashScripts.test).then((success) => {
  log.success(success || 'tests complete');
  /*
    DONE!
  */
}).catch(log.error);
