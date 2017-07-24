import React from 'react';

import DefaultLink from "./../link.jsx";

const Header = (props)=> {
  return (<header className="container">
    <div className="logo">
      <img src="/img/logo.png"/>
    </div>
    <ul className="menu container">
      <DefaultLink nameLink="Тесты" link="/test"/>
      <DefaultLink nameLink="О компании" link="/"/>
    </ul>
    <ul className="menu container">
      <DefaultLink nameLink={props.isAdmin?"Пользователи":"Фамилия И."} link={props.isAdmin?"/admin/user":"/profile"}/>
      <DefaultLink nameLink="Выйти" link="/signIn"/>
    </ul>
  </header>);
};

export default Header;