import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rating from '../Rating/Rating';
import Image from '../common/Image/Image';
import Heading from '../common/Heading/Heading';
import Button from '../common/Button/Button';
import Banner from '../common/Banner/Banner';

import './Product.css';

export const Product = ({ item }) => (
  item && 
    <div className="product">
      <a href={item.url} target="_blank" className="product__content">
        <figure className="product__figure">
          <Image src={item.image_url} alt={item.beer} className="product__image" />

          <figcaption>
            {item.beer && <Heading level={3}>{item.beer}</Heading>}
            {item.price && <p>£{item.price.toFixed(2)}</p>}
            {item.average_review_rating_0_to_5 && <Rating rating={item.average_review_rating_0_to_5} />}

            {item.quantity_in_stock <= 5 && item.quantity_in_stock > 0 &&
              <Banner>
                Low Stock
              </Banner>
            }

            {item.quantity_in_stock === 0 &&
              <Banner color="#39B54A">
                Out of Stock
                <span className="product__out">(Email me when back in!)</span>
              </Banner>
            }

            <div className="product__more">
              {item.brewery &&
                <p className="product__brewery">
                  <span className="product__brewery-name">{item.brewery}</span> Brewey
                </p>
              }
              <p className="row product__more-info">
                <span className="col-6">{item['alcohol_%']}%</span>
                {item.size && <span className="col-6">{item.size}</span>}
              </p>
              <p className="product__find-more">
                Find out more
                <span className="product__icon">
                  <FontAwesomeIcon icon="external-link-alt" />
                </span>
              </p>
            </div>
          </figcaption>
        </figure>
      </a>
      <Button text="Add to Basket" disabled={item.quantity_in_stock === 0} />
    </div>
);

Product.propTypes = {
  item: PropTypes.shape()
};

Product.defaultProps = {
  item: null
};

export default Product;
