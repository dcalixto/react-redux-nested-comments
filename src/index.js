import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './containers/App/App';

const storeWithMiddleware = store();

render(
  <Provider store={storeWithMiddleware}>
    <App />
  </Provider>, document.getElementById('root'));