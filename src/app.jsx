import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import Reducers from './reducers';

const store = createStore(Reducers);

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
