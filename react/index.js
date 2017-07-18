import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header.jsx';
import Main from './main/main.jsx';
import Footer from './footer/footer.jsx';

let user="Юрашевич Д.";
console.log(user);
ReactDOM.render(<div className='body'>
        <Header user={user}/>
        <Main/>
        <Footer/>
    </div>, document.getElementById('app'));