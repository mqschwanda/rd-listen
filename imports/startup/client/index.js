/* eslint-disable max-len */

/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
**/
import 'normalize.css';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { App } from '../../ui/layouts';

Meteor.startup(() => render(<App />, document.getElementById('react-root')));
