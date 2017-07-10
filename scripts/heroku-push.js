import inquirer from 'inquirer';
import { shellExec, log, promptSchema } from './helpers';

const { herokuPush } = promptSchema;
const prompt = inquirer.createPromptModule();

shellExec('clear').then(() => {
  log.header('pushing to heroku app');
  // get all git remotes from this repo
  shellExec('git remote -v', { stdout: false }).then((remotes) => {
    // get the git branches from this repo
    shellExec('git branch', { stdout: false }).then((branches) => {
      // run cli prompt with schema defined above
      prompt(herokuPush({ remotes, branches })).then(({ remote, branch }) => {
        /*
          EXECUTE THE GIT PUSH TO HEROKU
        */
        // Pushes the changes in your github repository to the heroku app
        shellExec(`git push ${remote} ${branch}`).then(() => {
          /*
            DONE!
          */
        }).catch(log.error);
      }).catch(log.error);
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
