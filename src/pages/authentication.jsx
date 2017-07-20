import React from 'react';
import {Route, Switch} from 'react-router-dom'

import SignIn from './../components/authentication/signIn.jsx';
import SignUp from './../components/authentication/signUp.jsx';


const Authentication =()=>{
    return (<div className="authentication">
        <h1 className="title">Авторизация</h1>
        <form>
            <Switch>
                <Route path="/auth/signUp" component={SignUp}/>
                <Route path="/auth/" component={SignIn} />
            </Switch>
        </form>
    </div>);
};

export default Authentication;