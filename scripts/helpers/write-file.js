import fs from 'fs';

// create a promise to save a file which resolves on finish
export default ({ content, path }) => new Promise((resolve, reject) => {
  // function to handle promise when `writeFile` is finished
  function handlePromise(error) {
    if (error) reject(error);
    else resolve('file saved');
  }
  // write file if it does not already exist
  if (!fs.existsSync(path)) fs.writeFile(path, content, handlePromise);
  else resolve('file already exists');
});
