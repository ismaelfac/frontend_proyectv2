import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from "./views/components/Dashboard";
import store from './redux/store';
import './style.css';

const nodes = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Redirect from="/" to="/dashboard"/>
            </Switch>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(nodes, document.getElementById('root'));