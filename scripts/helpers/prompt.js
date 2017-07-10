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
// };;

// // create a promise to save a file which resolves on finish
// export default schema => new Promise((resolve, reject) => {
//   // function to handle promise when prompot is finished
//   function handlePromise(error, success) {
//     if (error !== null) reject(error);
//     else resolve(success);
//   }
//   // Start the prompt
//   prompt.start();
//   // Get properties from the user
//   prompt.get(schema, handlePromise);
// });


// // const schemaExample = {
// //     // example: {
// //     //   description: 'Enter your password', // Prompt displayed to the user. If not supplied name will be used.
// //     //   type: 'string', // Specify the type of input to expect.
// //     //   pattern: /^\w+$/, // Regular expression that input must be valid against.
// //     //   message: 'Password must be letters', // Warning message to display if validation fails.
// //     //   hidden: true, // If true, characters entered will either not be output to console or will be outputed using the `replace` string.
// //     //   replace: '*', // If `hidden` is set it will replace each hidden character with the specified string.
// //     //   default: 'lamepassword', // Default value to use if no value is entered.
// //     //   required: true, // If true, value entered must be non-empty.
// //     //   before: value => value, // Runs before node-prompt callbacks. It modifies user's input
// //     // },
// //   },
// // };
//
// import prompt from 'prompt';
//
// prompt.message = '';
// prompt.delimiter = '';
//
// // create a promise to save a file which resolves on finish
// export default schema => new Promise((resolve, reject) => {
//   // function to handle promise when prompot is finished
//   function handlePromise(error, success) {
//     if (error !== null) reject(error);
//     else resolve(success);
//   }
//   // Start the prompt
//   prompt.start();
//   // Get properties from the user
//   prompt.get(schema, handlePromise);
// });
