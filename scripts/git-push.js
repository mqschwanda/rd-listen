import { shellExec, log } from './helpers';


// Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD <YOUR-FILE>'.
log.header('creating apache config');
shellExec('git add .').then(() => {
  // log.success();
  // Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
  shellExec('git commit -m "test git push script"').then(() => {
    // log.success();
    // Pushes the changes in your local repository up to the `<BRANCH_NAME>` of the remote repository you specified as origin
    shellExec('git push origin master').then(() => {
      // log.success();
      /*
        DONE!
      */
    }).catch(log.error);
  }).catch(log.error);
}).catch(log.error);
