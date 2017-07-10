import './prototypes';

const gitPush = ({ remotes, branches }) => [{
  type: 'list', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'remote', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'REMOTE: the name of the remote for the destination repository\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: 'origin', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
  choices: remotes.toGitRemoteArray(), // Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
}, {
  type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'branch', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'BRANCH: the name of the branch for the destination repository\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: branches.toBranchBase(), // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
  filter: string => string.trim(), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
}, {
  type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'message', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'MESSAGE: the commit message associated with this commit\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: '<TIMESTAMP>', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
  filter: string => (string === '<TIMESTAMP>' ? `${new Date()}` : string.trim()), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
}];

const herokuPush = ({ remotes, branches }) => [{
  type: 'list', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'remote', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'REMOTE: the name of the remote for the destination heroku app\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: 'heroku', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
  choices: remotes.toHerokuRemoteArray().length > 0 ? remotes.toHerokuRemoteArray() : ['heroku'], // Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
}, {
  type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'branch', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'BRANCH: the name of the branch to push from git repository\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: `${branches.toBranchBase() ? branches.toBranchBase() : 'master'}`, // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
  filter: string => string.trim(), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
}];

const herokuDestroy = ({ remotes }) => [{
  type: 'list', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'appName', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'APP NAME: the name of the heroku app being destroyed\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  filter: string => string.trim(), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
  choices: remotes.getAppNameArray(), // Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
}];

const herokuCreate = [{
  type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'appName', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'APP NAME: the name of the heroku app being created\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: '<RANDOM>', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
  filter: string => (string === '<RANDOM>' ? null : string.trim()), // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
}, {
  type: 'input', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
  name: 'remote', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
  message: 'REMOTE: the name of the remote for the destination heroku app\n ', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
  default: 'heroku', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
}];

export default { gitPush, herokuPush, herokuCreate, herokuDestroy };

// const schemaExample = {
//   type: 'String', // Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, expand, checkbox, password, editor
//   name: 'String', // The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
//   message: 'String|Function', // The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
//   default: 'String|Number|Array|Function', // Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
//   choices: 'Array|Function', // Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
//   validate: 'Function', // Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
//   filter: 'Function', // Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
//   when: 'Function|Boolean', // Receive the current user answers hash and should return true or false depending on whether or not this question should be asked. The value can also be a simple boolean.
//   pageSize: 'Number', // Change the number of lines that will be rendered when using list, rawList, expand or checkbox.
// };
