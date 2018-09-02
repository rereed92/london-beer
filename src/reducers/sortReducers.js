import * as types from '../actions/actionTypes';

import initialState from './initialState';

const sortByReducers = (state = initialState.sortOptions, action) => {
  switch(action.type) {
    case types.LOAD_SORT_SUCCESS:
      return action.sortOptions;

    default:
      return state;
  }
};

export default sortByReducers;