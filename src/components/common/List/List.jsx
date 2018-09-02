import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const List = ({ children, className, isUnstyled, isInline }) => (
  children &&
    <ul className={`list ${isUnstyled ? 'list--unstyled' : ''} ${isInline ? 'list--inline' : ''} ${className ? className : ''}`}>
      {children}
    </ul>
);

List.propTypes = {
  isUnstyled: PropTypes.bool,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.array
};

List.defaultProps = {
  isUnstyled: false,
  isInline: false,
  className: null,
  children: null
};

export default List;
