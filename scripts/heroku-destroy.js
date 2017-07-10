// import Promise from 'bluebird';
import inquirer from 'inquirer';

import { shellExec, log, promptSchema } from './helpers';
import './helpers/prototypes';

const { herokuDestroy } = promptSchema;
const prompt = inquirer.createPromptModule();

shellExec('clear').then(() => {
  log.header('destroying heroku app');
  // get all git remotes from this repo
  shellExec('git remote -v', { stdout: false }).then((remotes) => {
    // run cli prompt with schema defined above
    prompt(herokuDestroy({ remotes })).then(({ appName }) => {
      /*
        EXECUTE THE HEROKU DESTROY COMAND
      */
      // destroy the heroku app
      shellExec(`heroku apps:destroy -a ${appName} --confirm ${appName}`).then(() => {
        log.success(`destroyed heroku app: ${appName}`);
        /*
          DONE!
        */
      }).catch(log.error);
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
