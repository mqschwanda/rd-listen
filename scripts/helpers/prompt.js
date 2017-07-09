import prompt from 'prompt';
import { log } from './';

prompt.message = '';
prompt.delimiter = '';

// create a promise to save a file which resolves on finish
export default schema => new Promise((resolve, reject) => {
  // function to handle promise when prompot is finished
  function handlePromise(error, success) {
    if (error !== null) reject(error);
    else resolve(success);
  }
  // Start the prompt
  prompt.start();
  // Get properties from the user
  prompt.get(schema, handlePromise);
});

// const schemaExample = {
//     // example: {
//     //   description: 'Enter your password', // Prompt displayed to the user. If not supplied name will be used.
//     //   type: 'string', // Specify the type of input to expect.
//     //   pattern: /^\w+$/, // Regular expression that input must be valid against.
//     //   message: 'Password must be letters', // Warning message to display if validation fails.
//     //   hidden: true, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.
//     //   replace: '*', // If `hidden` is set it will replace each hidden character with the specified string.
//     //   default: 'lamepassword', // Default value to use if no value is entered.
//     //   required: true, // If true, value entered must be non-empty.
//     //   before: value => value, // Runs before node-prompt callbacks. It modifies user's input
//     // },
//   },
// };
