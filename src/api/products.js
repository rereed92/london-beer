import axios from 'axios';

let products = [];

const sortProducts = (key, asc=true) => {
  return function(a, b) {  
    if (a[key] > b[key]) {  
      return asc ? 1 : -1  
    } else if (a[key] < b[key]) {  
      return asc ? -1 : 1;
    }  
    return 0;  
  };
};

const delay = 200;

export default class productApi {
  static getProducts() {
    return new Promise((resolve, reject) => {
      axios.get('http://demo8465751.mockable.io/products')
        .then(response => {
          products = productApi.formatData(response.data);
          resolve(products)
        })
    });
  }

  static formatData(products) {
    products.forEach(product => {
      product.price = parseFloat(product.price.replace('£', ''));
    });

    return products;
  }

  static sortProducts(option, order) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        products = [...products].sort(sortProducts(option, order === 'asc' ? true : false));
        resolve(option, order === true ? 'asc' : 'desc');
      }, delay);
    });
  }
}