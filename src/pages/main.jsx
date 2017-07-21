import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from "./../components/header/header.jsx";
import Footer from "./../components/footer/footer.jsx";

import Categories from "./categories.jsx";
import About from "./about.jsx";
import Profile from "./user.jsx";
import Test from "./test.jsx";
import Questions from "./question.jsx";

console.log(window.location.pathname);
const Main = ()=> {
  return (
        <div className="body">
          <Header/>
          <Switch>
            <Route path="/admin/test/:catigories/:test" component={Questions}/>
            <Route path="/admin/test/:catigories" component={Test}/>
            <Route path="/admin/test" component={Categories}/>
            <Route path="/admin/user/:id" component={Profile}/>
            <Route path="/admin/user" component={About}/>
            <Route path="/test/:catigories/:test" component={Questions}/>
            <Route path="/test/:catigories" component={Test}/>
            <Route path="/test" component={Categories}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={About}/>
          </Switch>
          <Footer/>
        </div>);
};

export default Main;