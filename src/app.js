import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SignIn from './components/Authentication/signIn.jsx';
import SignUp from './components/Authentication/signUp.jsx';
import Main from './components/Main/index.jsx';

const initialState = {
    categories: [{
        id: 1,
        name: "C#",
        isReady: true
    },{
        id: 2,
        name: "C++",
        isReady: true
    },
    {
        id: 3,
        name: "Java",
        isReady: true
    },
    {
        id: 4,
        name: "Ruby",
        isReady: true
    },
    {
        id: 5,
        name: "JS",
        isReady: true
    },
    {
        id: 6,
        name: "HTML",
        isReady: true
    },
    {
        id: 7,
        name: "CSS",
        isReady: true
    },
    {
        id: 8,
        name: "XML",
        isReady: true
    }],
    tests:[]
};
let id=8;
function rootReducer(state = initialState, action) {
    switch(action.type)
    {
        case 'ADD_CATEGORY':{
            return Object.assign({}, state, {
                categories: [
                ...state.categories,
                {
                    id: ++id,
                    name: "New Category!",
                    isReady: false
                }
            ]});
        }
        case 'DELETE_CATEGORY':{
            return Object.assign({}, state, {
                categories: state.categories.filter(element => element.id !== action.data)});
        }
        case 'CHANGE_CATEGORY':{
            return Object.assign({}, state, {
                categories: state.categories.map(element => {if(element.id==action.data) {element.isReady=(!element.isReady)}; return element})
            })
        }
    }
    return state;
}

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