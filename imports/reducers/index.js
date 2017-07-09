/* eslint-disable no-console */

import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers);

if (process.env.NODE_ENV !== 'production') {
  store.subscribe(() => { console.log('store change', store.getState()); });
}

export default store;
