import inquirer from 'inquirer';

import { shellExec, log, promptSchema } from './helpers';
import './helpers/prototypes';

const prompt = inquirer.createPromptModule();
const { herokuCreate } = promptSchema;

shellExec('clear').then(() => {
  log.header('creating heroku app');
  prompt(herokuCreate).then(({ appName, remote }) => {
    // Create a Heroku app from the command line
    shellExec(`heroku create ${appName ? `-a ${appName}` : ''}`).then((stdout) => {
      const actualAppName = appName || stdout.toHerokuAppName();
      // Link to Heroku with a git remote.
      shellExec(`heroku git:remote -a ${actualAppName} -r ${remote}`).then(() => {
        /*
          EXECUTE THE GIT PUSH TO HEROKU
        */
        // Pushes the changes in your github repository to the heroku app
        shellExec(`git push ${remote} master`).then(() => {
          log.success(`created heroku app: ${actualAppName}`);
          /*
            DONE!
          */
        }).catch(log.error);
      }).catch(log.error);
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
