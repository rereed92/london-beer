import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBeer, faExternalLinkAlt, faCheck, faThumbtack, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Header } from './Header/Header';
import Listings from './Listings/Listings';
import { Footer } from './Footer/Footer';

import '../assets/sass/global.css';

export const App = () => {
  library.add(faBeer, faExternalLinkAlt, faCheck, faThumbtack, faChevronDown);

  return (
    <React.Fragment>
      <Header />
  
      <main className="container">
        <Listings />
      </main>
  
      <Footer />
    </React.Fragment>
  )
}

export default App;
