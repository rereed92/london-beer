import React from 'react';
import PropTypes from 'prop-types';

import './Heading.css';

const Heading = ({ level, children, className }) => {
  const H = `h${level}`;
  return (
    children &&
      <H className={`heading heading--${level} ${className ? className : ''}`}>
        {children}
      </H>
  );
}

Heading.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.string
};

Heading.defaultProps = {
  level: 2,
  children: null,
  className: null,
};

export default Heading;
