import * as types from './actionTypes';

import productApi from '../api/products';

export function loadProducts() {
  return function(dispatch) {
    return productApi.getProducts()
      .then(products => {
        dispatch(loadProductsSuccess(products));
      }).catch(error => {
        throw(error);
      });
  };
}

export function loadProductsSuccess(products) {
  return { 
    type: types.LOAD_PRODUCTS_SUCCESS,
    products 
  };
}

export function sortProducts(option, order) {
  return function(dispatch) {
    return productApi.sortProducts(option, order)
      .then((op, or) => {
        dispatch(sortProductsSuccess(option, order));
      }).catch(error => {
        throw(error);
      });
  };
}

export function sortProductsSuccess(option, order) {
  return {
    type: types.SORT_PRODUCTS,
    option,
    order
  };
}