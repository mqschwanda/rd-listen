
import { shellExec, log, prompt } from './helpers';

const schema = {
  properties: {
    remote: {
      type: 'string', // Specify the type of input to expect.
      message: 'git remote',
      default: 'origin', // Default value to use if no value is entered.
    },
    branch: {
      type: 'string', // Specify the type of input to expect.
      message: 'git repo branch',
      default: 'master', // Default value to use if no value is entered.
    },
    message: {
      type: 'string', // Specify the type of input to expect.
      message: 'commit message',
      default: `${new Date()}`, // Default value to use if no value is entered.
    },
  },
};

log.header('pushing to github');
prompt(schema).then(({ remote, branch, message }) => {
  // Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD <YOUR-FILE>'.
  shellExec('git add .').then(() => {
    // Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
    shellExec(`git commit -m "${message}"`).then(() => {
      // Pushes the changes in your local repository up to the `<BRANCH_NAME>` of the remote repository you specified as origin
      shellExec(`git push ${remote} ${branch}`).then(() => {
        log.success('push success');
        /*
          DONE!
        */
      }).catch(log.error);
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
