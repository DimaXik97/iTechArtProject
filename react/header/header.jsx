import React from 'react';

import Logo from './logo.jsx';
import MenuLinks from './menuLinks.jsx';
import MenuProfile from './menuProfile.jsx';

const Header = (props)=> {
    console.log("Header", props);
  return (<header className="container">
            <Logo/>
            <MenuLinks/>
            <MenuProfile user={props.user}/>
        </header>);
};

export default Header;