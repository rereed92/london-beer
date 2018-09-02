import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Fieldset from '../common/Fieldset/Fieldset';
import Legend from '../common/Legend/Legend';
import Checkbox from '../common/Checkbox/Checkbox';
import Range from '../common/Range/Range';

import './Filters.css';

class Filters extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: window.innerWidth >= 992
    };

    this.isDesktop = this.isDesktop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.isDesktop);
  }

  isDesktop() {
    this.setState({ 
      isDesktop: window.innerWidth >= 992
    });
  }

  render() {
    let showFilters = (this.state.isDesktop) || (!this.state.isDesktop && this.props.showFilters);

    return (
      <form className={`filters ${showFilters ? 'filters--visible' : ''}`} method="#" action="GET">
        <Fieldset className="filters__fieldset">
          <Legend className="sr-only" text="Filter options" />
          <Fieldset>
            <Legend className="sr-only" text="Hide certain products" />
            <Checkbox value="hide-out-of-stock" text="Hide Out of Stock Items" />
          </Fieldset>
          <Fieldset>
            <Legend text="Brewery" />
            <div className="filters__wrapper">
              <Checkbox value="alvinne" text="Alvinne" />
              <Checkbox value="amundsen" text="Amundsen" />
              <Checkbox value="berliner" text="Berliner" />
              <Checkbox value="mikkeller" text="Mikkeller" />
              <Checkbox value="tegernesse" text="Tegernesse" />
              <Checkbox value="to-ol" text="To Ol" />
            </div>
          </Fieldset>
          <Fieldset>
            <Legend text="Alcohol Percentage" />
            <div className="filters__wrapper">
              <Checkbox value="0-5" text="0% - 5%" />
              <Checkbox value="5-10" text="5% - 10%" />
              <Checkbox value="10 - 15" text="10% - 15%" />
            </div>
          </Fieldset>
          <Fieldset>
            <Legend text="Price" />
            <div className="filters__wrapper">
              <Range min={0} max={30} step={5} prepend="£" />
            </div>
          </Fieldset>
          <Fieldset>
            <Legend text="Average Rating" />
            <div className="filters__wrapper">
              <Range min={0} max={5} step={1} />
            </div>
          </Fieldset>
        </Fieldset>
      </form>
    )
  }
}

Filters.propTypes = {
  showFilter: PropTypes.bool,
};

Filters.defaultProps = {
  showFilter: false
};

export default Filters;