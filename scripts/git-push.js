import inquirer from 'inquirer';
import { shellExec, log, promptSchema } from './helpers';

const { gitPush } = promptSchema;
const prompt = inquirer.createPromptModule();

shellExec('clear').then(() => {
  log.header('pushing to github');
  // get all git remotes from this repo
  shellExec('git remote -v', { stdout: false }).then((remotes) => {
    // get the git branches from this repo
    shellExec('git branch', { stdout: false }).then((branches) => {
      // run cli prompt with schema defined above
      prompt(gitPush({ remotes, branches })).then(({ remote, branch, message }) => {
        /*
          EXECUTE THE GIT COMMIT
        */
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
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
