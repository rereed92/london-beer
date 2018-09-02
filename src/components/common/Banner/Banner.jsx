import React from 'react';
import PropTypes from 'prop-types';

import './Banner.css';

const Banner = ({ color, children }) => (
<div className="banner" style={{backgroundColor: color}}>
  {children &&
    <span className="banner__content">
      {children}
    </span>
  }
</div>
)

Banner.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Banner.defaultProps = {
  color: '#68164B',
  children: null,
};

export default Banner;
