import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom'



import Main from './pages/main.jsx';
import Authentication from './pages/authentication.jsx';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/auth" component={Authentication}/>
            <Route path="/" component={Main}/>
        </Switch>
    </HashRouter>,
    document.getElementById('app'));