
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import List from '../common/List/List';

import './Rating.css';

export default class Rating extends PureComponent {

  createRating(index) {
    return (
      <li className={`rating__icon ${index <= this.props.rating ? 'rating__icon--fill' : ''}`} key={`rating${index}`}>
        <FontAwesomeIcon icon="beer" />
      </li>
    )
  }

  createRatings() {
    let ratings = [];

    for(let i = 1; i < 6; i++) {
      ratings.push(this.createRating(i))
    }

    return ratings;
  }

  render() {
    return (
      this.props.rating &&
        <List isUnstyled isInline className="rating">
          {this.createRatings()}
        </List>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number
};

Rating.defaultProps = {
  rating: 0,
};
