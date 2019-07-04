import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import appReducers from './reducers';
import App from './App';

const appStore = createStore(appReducers);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.querySelector('#root'));