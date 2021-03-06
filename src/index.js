import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { cartReducer } from './reducers/cartReducer'

// Create Redux store to handle state and connect to rootReducer
const store = createStore(cartReducer)
console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
