import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
    tests:[{
        id: 1,
        name: "Типы данных, переменные, операторы, циклы, массивы",
        isReady: true
    },
    {
        id: 2,
        name: "ООП",
        isReady: true
    },
    {
        id: 3,
        name: "Исключения",
        isReady: true
    },
    {
        id: 4,
        name: "Коллекции",
        isReady: true
    },
    {
        id: 5,
        name: "Строки",
        isReady: true
    },
    {
        id: 6,
        name: "Потоки ввода/вывода",
        isReady: true
    },
    {
        id: 7,
        name: " Потоки выполнения",
        isReady: true
    },
    {
        id: 8,
        name: "SQL, JDBC",
        isReady: true
    },
    {
        id: 9,
        name: "JSP",
        isReady: true
    },
    {
        id: 10,
        name: "Servlet",
        isReady: true
    }],
    users:[{
        id: 1,
        name: "1",
        surName: "User"
    },
    {
        id: 2,
        name: "2",
        surName: "User"
    },
    {
        id: 3,
        name: "3",
        surName: "User"
    },
    {
        id: 4,
        name: "4",
        surName: "User"
    },
    {
        id: 5,
        name: "5",
        surName: "User"
    },
    {
        id: 6,
        name: "6",
        surName: "User"
    },
    {
        id: 7,
        name: "726262",
        surName: "User"
    },
    {
        id: 8,
        name: "8",
        surName: "User"
    }]
};
let id=8;
let idTest=10;
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
        case 'ADD_TEST':{
            return Object.assign({}, state, {
                tests: [
                ...state.tests,
                {
                    id: ++idTest,
                    name: "New Test!",
                    isReady: false
                }
            ]});
        }
        case 'DELETE_TEST':{
            return Object.assign({}, state, {
                tests: state.tests.filter(element => element.id !== action.data)});
        }
        case 'CHANGE_TEST':{
            return Object.assign({}, state, {
                tests: state.tests.map(element => {if(element.id==action.data) {element.isReady=(!element.isReady)}; return element})
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