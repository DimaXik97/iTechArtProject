import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header.jsx';
import Main from './main/main.jsx';
import Footer from './footer/footer.jsx';

import Authentication from './authentication/authentication.jsx';
import SignIn from './authentication/SignIn.jsx'

let user="Юрашевич Д.";
let categories=[{
    name: "C#"
},{
    name: "C++"
},
{
    name: "Java"
},
{
    name: "Ruby"
},
{
    name: "JS"
},
{
    name: "HTML"
},
{
    name: "CSS"
},
{
    name: "XML"
}];
console.log(user);
/*<div className='body'>
    <Header user={user}/>
    <Main categories={categories}/>
    <Footer/>
    </div>*/
ReactDOM.render(
    <Authentication form={<SignIn/>} type={"Авторизария:"}/>,
    document.getElementById('app'));