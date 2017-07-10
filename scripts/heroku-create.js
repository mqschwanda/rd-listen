import inquirer from 'inquirer';

import { shellExec, log, promptSchema } from './helpers';

require('./helpers/string-prototypes');

const prompt = inquirer.createPromptModule();
const { herokuCreate } = promptSchema;

shellExec('clear').then(() => {
  log.header('creating a heroku application');
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
          /*
            DONE!
          */
        }).catch(log.error);
      }).catch(log.error);
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
