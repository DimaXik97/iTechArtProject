import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Menu from './menu.jsx';
import Contacts from './contacts.jsx';
import Vacancies from './vacancies.jsx';
import News from './news.jsx';


const About = ()=> {
  return (
    <main className="aboutPage">
        <Menu/>
        <Switch>
            <Route path="/about/contacts" component={Contacts}/>
            <Route path="/about/vacancies" component={Vacancies}/>
            <Route path="/about/news" component={News}/>
            <Route path="/" render={() => <Redirect to="/about/news"/>}/>
        </Switch>    
    </main>
  );
};
export default About;