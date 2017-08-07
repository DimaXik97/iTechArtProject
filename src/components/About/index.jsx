import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Menu from './menu.jsx';
import Contacts from './contacts.jsx';
import Vacancies from './vacancies.jsx';
import News from './news.jsx';


class About extends React.Component{
  componentDidMount(){
    this.props.init();
  }
  render(){
    return (
      <main className="aboutPage">
          <Menu/>
          <Switch>
              <Route path="/about/contacts" component={Contacts}/>
              <Route path="/about/vacancies" render={()=><Vacancies vacancies={this.props.vacancies}/>}/>
              <Route path="/about/news" render={()=><News news={this.props.news}/>}/>
              <Route path="/" render={() => <Redirect to="/about/news"/>}/>
          </Switch>    
      </main>);
  }
};
export default About;