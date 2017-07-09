/* eslint-disable no-console */

import Chalk from 'chalk';

const chalk = new Chalk.constructor({ level: 1 });

// create a promise to run a script in a child process which resolves on finish
const consoleChalk = (string, ...args) => new Promise((resolve) => {
  // get the string for logging
  let output = typeof string === 'string' ? string : JSON.stringify(string);
  const options = [...args];
  // handle upercase option and remove it from array so it wont throw a chalk error
  if (args.includes('uppercase')) {
    output = output.toUpperCase();
    options.splice(options.indexOf('uppercase'), 1);
  }
  // build output for each option by using nesting chalk functions
  for (let i = 0; i < options.length; i += 1) {
    output = chalk[options[i]](output);
    // resolve and log the styled output
    if (i === options.length - 1) resolve(console.log(output));
  }
});

const header = string =>
  consoleChalk(`\n${string}`, 'underline', 'white', 'uppercase');

const error = string => consoleChalk(string, 'red', 'uppercase');

const success = string => consoleChalk(string, 'green', 'uppercase');

export default { header, error, success };
