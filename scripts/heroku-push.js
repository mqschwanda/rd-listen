
import { shellExec, log, prompt } from './helpers';

log.header('pushing to heroku');
shellExec('git remote -v').then((remotes) => {
  // log.success(`The application is now hosted at \`https://${appName}.herokuapp.com\``);
  const schema = {
    properties: {
      remote: {
        type: 'string', // Specify the type of input to expect.
        message: 'git remote',
        default: 'testing', // Default value to use if no value is entered.
      },
      branch: {
        type: 'string', // Specify the type of input to expect.
        message: 'git repo branch',
        default: 'master', // Default value to use if no value is entered.
      },
    },
  };
  prompt(schema).then(({ remote, branch }) => {
    // Pushes the changes in your github repository to the heroku app
    shellExec(`git push ${remote} ${branch}`).then(() => {
      // log.success(`The application is now hosted at \`https://${appName}.herokuapp.com\``);
      /*
        DONE!
      */
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
