import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SignIn from './components/Authentication/signIn.jsx';
import SignUp from './components/Authentication/signUp.jsx';
import Main from './components/Main/index.jsx';

const initialState = [{
    id: 1,
    name: "C#"
},{
    id: 2,
    name: "C++"
},
{
    id: 3,
    name: "Java"
},
{
    id: 4,
    name: "Ruby"
},
{
    id: 5,
    name: "JS"
},
{
    id: 6,
    name: "HTML"
},
{
    id: 7,
    name: "CSS"
},
{
    id: 8,
    name: "XML"
}];
let id=8;
function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_CATEGORIES') {
    return [
      ...state,
      {
          id: id++,
          name: "New Category!"
      }
    ];
  }
  return state;
}

const store = createStore(rootReducer);


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