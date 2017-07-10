import inquirer from 'inquirer';
import { shellExec, log } from './helpers';

const prompt = inquirer.createPromptModule();
// sort alphabeticly
// Array.prototype.sortAlphabetically = function () {
//   return this.sort((a, b) => {
//     const A = a.toUpperCase();
//     const B = b.toUpperCase();
//     return (A < B) ? -1 : ((A > B) ? 1 : 0);
//   });
// };
// move array index of item inside array
Array.prototype.makeFirst = function (oldIndex) {
  if (this.length <= 0) {
    let k = 0 - this.length;
    while ((k -= 1) + 1) { this.push(undefined); }
  }
  this.splice(0, 0, this.splice(oldIndex, 1)[0]);
  return this; // for testing purposes
};
// move array index of item inside array
Array.prototype.makeOriginFirst = function () {
  return this.makeFirst(this.indexOf('origin'));
};
// split the master descriptive string on each remote and make an array
String.prototype.splitOnLineBreak = function () { return this.split(/\r?\n/); };
// get the base of the remote from descriptive string
Array.prototype.sliceBeforeTab = function () { return this.map(string => string.split(/\t/)[0]); };
// remove empty strings from the array
Array.prototype.removeEmptyString = function () { return this.filter(string => string.trim() !== ''); };
// create a unique array from an existing array
Array.prototype.makeUnique = function () { return Array.from(new Set(this)); };
// get remote array from terminal output
String.prototype.getRemotes = function () {
  return this.splitOnLineBreak()
             .sliceBeforeTab()
             .removeEmptyString()
             .makeUnique()
             .makeOriginFirst();
};
// get the base of the branch from descriptive string
String.prototype.getBranchBase = function () { return this.split(' ')[1].trim(); };


shellExec('clear').then(() => {
  log.header('pushing to github');
  shellExec('git remote -v', { stdout: false }).then((remoteString) => {
    shellExec('git branch', { stdout: false }).then((branchString) => {
      const schema = [{
        type: 'list', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
        name: 'remote', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
        message: 'REMOTE: the name of the remote for the destination repository\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
        default: 'origin', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
        choices: remoteString.getRemotes() || 'origin', // Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
      }, {
        type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
        name: 'branch', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
        message: 'BRANCH: the name of the branch for the destination repository\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
        default: `${branchString.getBranchBase() ? branchString.getBranchBase() : 'master'}`, // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
        filter: string => string.trim(), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
      }, {
        type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
        name: 'message', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
        message: 'MESSAGE: the commit message associated with this commit\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
        default: '<TIMESTAMP>', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
        filter: string => (string === '<TIMESTAMP>' ? `${new Date()}` : string), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
      }];

      prompt(schema).then(({ remote, branch, message }) => {
        // console.log({ remote, branch, message });
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
