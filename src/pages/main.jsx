import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from "./../components/header/header.jsx";
import Footer from "./../components/footer/footer.jsx";

import Categories from "./categories.jsx";
import About from "./about.jsx";
import Profile from "./user.jsx";
import Test from "./test.jsx";
import Questions from "./question.jsx";


const Main = ()=> {
  return (
        <div className="body">
          <Header/>
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/test" component={Test}/>
            <Route path="/question" component={Questions}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Categories}/>
          </Switch>
          <Footer/>
        </div>);
};

export default Main;