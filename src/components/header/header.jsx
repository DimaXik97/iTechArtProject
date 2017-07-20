import React from 'react';

import DefaultLink from "./../link.jsx";

const Header = ()=> {
  return (<header className="container">
    <div className="logo">
      <img src="img/logo.png"/>
    </div>
    <ul className="menu container">
      <DefaultLink nameLink="Главная" link="/"/>
      <DefaultLink nameLink="О компании" link="/about"/>
    </ul>
    <ul className="menu container">
      <DefaultLink nameLink="Фамилия И." link="/user"/>
      <DefaultLink nameLink="Выйти" link="/auth"/>
    </ul>
  </header>);
};

export default Header;