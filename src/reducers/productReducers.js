import * as types from '../actions/actionTypes';

import initialState from './initialState';

const sort = (key, asc=true) => {
  return function(a, b) {  
    if (a[key] > b[key]) {  
      return asc ? 1 : -1  
    } else if (a[key] < b[key]) {  
      return asc ? -1 : 1;
    }  
    return 0;  
  };
};

const productReducers = (state = initialState.products, action) => {
  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;

    case types.SORT_PRODUCTS:
      return [...state].sort(sort(action.option, action.order === 'asc' ? true : false));

    default:
      return state;
  }   
};

export default productReducers;