/* eslint-disable max-len */

/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
**/

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../../ui/layouts';
import 'normalize-css'; // normalize helps standardize browser defaults

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
