import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header.jsx';
import Main from './main/main.jsx';
import Footer from './footer/footer.jsx';

let user="Юрашевич Д.";
let categories=[{
    name: "C#"
},
{
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
ReactDOM.render(<div className='body'>
        <Header user={user}/>
        <Main categories={categories}/>
        <Footer/>
    </div>, document.getElementById('app'));