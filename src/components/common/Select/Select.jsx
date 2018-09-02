import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Select.css';

const Select = ({ label, options, value, handleChange }) => (
  options && 
    <label className="select">
      {label && <span className="select__label">{label}</span> }
      <div className="select__wrapper">
        <select
          className="select__select"
          value={value}
          onChange={handleChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.option}</option>
          ))}
        </select>
        <FontAwesomeIcon icon="chevron-down" className="select__icon" />
      </div>
    </label>
);

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.array,
};

Select.defaultProps = {
  label: null,
  value: '',
  options: null
};

export default Select;
