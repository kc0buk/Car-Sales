import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { rootReducer } from './reducers'

// Create Redux store to handle state and connect to rootReducer
const store = createStore(rootReducer)
console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
