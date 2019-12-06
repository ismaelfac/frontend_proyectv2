import React from 'react';
import ReactDOM from "react-dom";
import Root from "./components/Root";
import { Provider } from "react-redux";
import store from './redux/store';

const nodes = (
    <Provider store={store}>
        <Root />
    </Provider>

);

ReactDOM.render(nodes, document.getElementById('root'));