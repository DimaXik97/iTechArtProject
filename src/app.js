import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import SignIn from './components/authentication/signIn.jsx';
import SignUp from './components/authentication/signUp.jsx';
import Main from './pages/main.jsx';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/" component={Main}/>
        </Switch> 
    </BrowserRouter>,
    document.getElementById('app'));