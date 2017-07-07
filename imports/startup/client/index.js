/* eslint-disable max-len */

/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
**/

import 'normalize-css'; // normalize helps standardize browser defaults
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { App } from 'layouts';
import store from 'reducers/index';

render(<Provider {...{ store }}><App/></Provider>, document.getElementById('app'));

if (module && module.hot) module.hot.accept();
