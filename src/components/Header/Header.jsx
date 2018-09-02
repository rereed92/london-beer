import React from 'react';

import Heading from '../common/Heading/Heading';

import './Header.css';

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <Heading level={1}>London Beer</Heading>
      </div>
    </div>
  </header>
);

export default Header;
