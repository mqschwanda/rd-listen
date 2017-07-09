import fs from 'fs-extra';
import Promise from 'bluebird';
import Multispinner from 'multispinner';
import path from 'path';

let spinner;

// make an absolute path relative to the app's root
const appRelative = (filePath) => {
  const appDir = path.resolve(__dirname, '../../');
  const relativePath = path.relative(appDir, filePath);
  return `<APP_DIR>/${relativePath}`;
};

// handle an array or string as input and return an array
const handleArgs = (args) => {
  if (Array.isArray(args)) return args;
  else if (typeof args === 'string') return [args];
  return [];
};

// create a promise for the file removal process and apply changes to the spinner list
const removeFile = filePath => new Promise((resolve, reject) => {
  if (fs.existsSync(filePath)) { // check to see if the file exists
    fs.remove(filePath) // attempt to delete the file
      .then(() => resolve(spinner.success(appRelative(filePath)))) // display spinner succes for file
      .catch(() => reject(spinner.error(appRelative(filePath)))); // display spinner error for file
  } else { // resolve the promise if the file does not exist
    resolve(spinner.success(appRelative(filePath)));
  }
});

const handlePromise = () => new Promise((resolve, reject) => {
  spinner.on('done', () => resolve('finished removing files!'));
  spinner.on('err', reject);
});

export default function removeFiles(...args) {
  // an array of file paths
  const filePaths = handleArgs(args);
  // build spinner list from file paths but display them as relative instead of absolute
  spinner = new Multispinner(filePaths.map(appRelative));

  return Promise.each(filePaths, removeFile).then(handlePromise);
}
