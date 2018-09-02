import * as types from './actionTypes';

import sortApi from '../api/sort';

export function loadSort() {
  return function(dispatch) {
    return sortApi.getSortOptions()
      .then(sortOptions => {
          dispatch(loadSortSuccess(sortOptions));
      }).catch(error => {
          throw(error);
      });
  };
}

export function loadSortSuccess(sortOptions) {
  return { 
    type: types.LOAD_SORT_SUCCESS,
    sortOptions
  };
}