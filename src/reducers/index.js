import { combineReducers } from 'redux';

import products from './productReducers';
import sortOptions from './sortReducers';

const reducers = combineReducers({
  products,
  sortOptions
});

export default reducers;