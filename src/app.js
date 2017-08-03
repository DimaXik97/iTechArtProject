import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import SignIn from './components/Authentication/signIn.jsx';
import SignUp from './components/Authentication/signUp.jsx';
import Main from './components/Main/index.jsx';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/" component={Main}/>
            </Switch> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'));