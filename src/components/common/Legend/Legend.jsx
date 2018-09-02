
import React from 'react';
import PropTypes from 'prop-types';

import './Legend.css';

const Legend = ({ text, className }) => (
  text && 
    <legend className={`legend ${className ? className : ''}`}>
      {text}
    </legend>
);

Legend.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Legend.defaultProps = {
  text: null,
  className: null,
};

export default Legend;