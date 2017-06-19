
import { combineReducers } from 'redux';
import { sizeReducer } from './size';

export default combineReducers({ size: sizeReducer });
