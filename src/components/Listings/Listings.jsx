import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';
import Sort from '../Sort/Sort';
import Products from '../Products/Products';

import Button from '../common/Button/Button';

import './Listings.css';

class Listings extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showFilters: false,
    };

    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleFilters() {
    this.setState({ showFilters : !this.state.showFilters });
  }

  render() {
    const { products } = this.props;
    const { showFilters } = this.state;

    return (!products)
      ? <div>Loading</div> 
      : (
        <div className="listings row">
          <div className="col-12 col-lg-3">
            <Filters showFilters={showFilters} />
          </div>
          <div className="col-12 col-lg-9">
            <div className="listings__wrapper">
              <div className="listings__filters">
                <Button text="Filters" slim onClick={this.toggleFilters} />
              </div>
              <Sort />
            </div>
            <Products products={products} />
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

Listings.propTypes = {
  products: PropTypes.array,
};

Listings.defaultProps = {
  products: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);

