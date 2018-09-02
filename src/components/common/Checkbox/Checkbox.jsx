import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.css';

const Checkbox = ({ value, text}) => (
  <label className="checkbox">
    <input type="checkbox" value={value} className="checkbox__input" /> 
    {text && <span className="checkbox__text">{text}</span>}
  </label>
);

Checkbox.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
};

Checkbox.defaultProps = {
  value: '',
  text: null,
};


export default Checkbox;