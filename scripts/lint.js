import { shellExec, log, bashScripts } from './helpers';

/*
  RUN LINTER
*/
log.header('linting with eslint');
shellExec(bashScripts.lint).then((success) => {
  log.success(success || 'lint complete');
  /*
    DONE!
  */
}).catch(log.error);
