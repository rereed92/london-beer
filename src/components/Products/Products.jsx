import React from 'react';
import PropTypes from 'prop-types';

import { Product } from '../Product/Product';

import Heading from '../common/Heading/Heading';
import List from '../common/List/List';

const Products = ({ products }) => (
  <React.Fragment>
    <Heading level={2} className="sr-only">List of Products</Heading>
    <List isUnstyled className="products row">
      {products.length &&
        products.map(item => (
          <li key={item.sku} className="col-12 col-md-6 col-lg-3">
            <Product item={item} />
          </li>
        ))
      }
    </List>
  </React.Fragment>
);

Products.propTypes = {
  products: PropTypes.array
};

Products.defaultProps = {
  products: null,
};

export default Products;