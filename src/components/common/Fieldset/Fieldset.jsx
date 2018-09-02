import React from 'react';
import PropTypes from 'prop-types';

import './Fieldset.css';

const Fieldset = ({ className, children }) => (
  children &&
    <fieldset className={`fieldset ${className ? className : ''}`}>
      {children}
    </fieldset>
);

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
};

Fieldset.defaultProps = {
  className: null,
  children: null
};


export default Fieldset;