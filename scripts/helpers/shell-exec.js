const { exec } = require('child_process');

// create a promise to run a script in a child process which resolves on finish
export default (script, options = {
  stdout: true, // pipe log to parent process
  stderr: true, // pipe log to parent process
}) => new Promise((resolve, reject) => {
  // kill promise with callback function on shell script execution
  function handlePromise(error, stdout) {
    if (error) reject(error);
    else resolve(stdout);
  }
  // run the script in a child process
  const childProcess = exec(script, handlePromise);

    // send logs to the parent process with a little plumbing
  if (options.stdout) childProcess.stdout.pipe(process.stdout); // output
  if (options.stdout) childProcess.stderr.pipe(process.stderr); // errors
});
