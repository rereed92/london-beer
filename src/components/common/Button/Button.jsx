import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ text, disabled, slim, onClick }) => (
  text && 
    <button type="button" className={`button ${slim ? 'button--slim' : ''}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
);

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  slim: PropTypes.bool
};

Button.defaultProps = {
  text: null,
  disabled: false,
  slim: false
};

export default Button;
