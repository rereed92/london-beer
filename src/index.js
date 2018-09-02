import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import { loadProducts } from './actions/productActions';
import { loadSort } from './actions/sortActions';

import App from './components/App';

const store = configureStore();
store.dispatch(loadProducts());
store.dispatch(loadSort());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();