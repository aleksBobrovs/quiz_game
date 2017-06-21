import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configure } from './store/configureStore'

ReactDOM.render(
    <Provider store={configure()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
