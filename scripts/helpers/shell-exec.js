const { exec } = require('child_process');

// create a promise to run a script in a child process which resolves on finish
export default script => new Promise((resolve, reject) => {
  // kill promise with callback function on shell script execution
  function handlePromise(error, stdout) {
    if (error) reject(error);
    else resolve(stdout);
  }
  // run the script in a child process
  const childProcess = exec(script, handlePromise);
  // send logs to the parent process with a little plumbing
  childProcess.stdout.pipe(process.stdout); // output
  childProcess.stderr.pipe(process.stderr); // errors
});
