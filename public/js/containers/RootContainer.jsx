import React, { Component } from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';
import AppContainer from './AppContainer.jsx';
import Index from '../components/Index.jsx';
import LoginForm from '../components/LoginForm.jsx';

import '../../sass/main.scss';


class RootContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={ store } >
                <Router history={ browserHistory } >

                    <Route path="/" component={ AppContainer } >

                        <IndexRoute component={ Index } />

                        <Route path="/signup" component={ LoginForm } />

                    </ Route>

                </ Router>
            </ Provider>
        );
    }

}

export default RootContainer;