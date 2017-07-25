import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Menu from './../components/about/menu.jsx';
import Contacts from './../components/about/contacts.jsx';
import Vacancies from './../components/about/vacancies.jsx';
import News from './../components/about/news.jsx';




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