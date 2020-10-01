import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';

const store = createStore(Reducers);

store.subscribe(() => {
    console.log(store.getState());
})

const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));