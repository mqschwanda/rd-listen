
import { shellExec, log, prompt } from './helpers';

const schema = {
  properties: {
    appName: {
      type: 'string', // Specify the type of input to expect.
      message: 'heroku app name',
      default: 'mqs-heroku-push', // Default value to use if no value is entered.
    },
    remote: {
      type: 'string', // Specify the type of input to expect.
      message: 'git remote for heroku',
      default: 'testherokupush', // Default value to use if no value is entered.
    },
  },
};

log.header('creating a heroku application');
prompt(schema).then(({ appName, remote }) => {
  // Create a Heroku app from the command line
  shellExec(`heroku create -a  ${appName}`).then(() => {
    // # Link to Heroku with a git remote.
    shellExec(`heroku git:remote -a ${appName} -r ${remote}`).then(() => {
      log.success(`The application is now hosted at \`https://${appName}.herokuapp.com\``);
      /*
        DONE!
      */
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
