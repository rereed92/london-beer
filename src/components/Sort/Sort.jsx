import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Select from '../common/Select/Select';

import { sortProducts } from '../../actions/productActions';

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      option: '',
      options: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.sortOptions !== prevProps.sortOptions) {
      this.sort();
    }
  }

  sort() {
    this.setState({
      option: this.props.sortOptions[0].value,
      options: this.props.sortOptions,
    }, (() => this.props.sortProducts(this.state.option)));
  }

  handleChange(e) {
    this.setState({ 
      option: e.target.value 
    }, (() => this.props.sortProducts(this.state.option)));
  }

  render() {
    const { options, option } = this.state;

    return (
      <div className="sort">
        <Select
          label="Sort by"
          options={options}
          value={option}
          handleChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortOptions: state.sortOptions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortProducts: (sortOption) => {
      const option = sortOption.split('-')[0];
      const order = sortOption.split('-')[1];
      dispatch(sortProducts(option, order))
    },
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Sort);