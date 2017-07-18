import React from 'react';

function genereateLink(user)
{
    let link,name;
    if(user=="admin")
    {
        link="userInfo.html";
        name="ADMIN";
    }
    else{
        link="myProfile.html";
        name=user;
    }
    return (<a href={link}>{name}</a>)
}

const MenuProfile = (props)=> {
    if(!props.user){
        return (<ul className="menu container">
            <li className="menuItem">
                <a href="signIn.html">Войти</a>
            </li>
            <li className="menuItem container">
                <a href="signUp.html">Регистрация</a>
            </li>
        </ul>);
    }
    else 
    {
        return (<ul className="menu container">
            <li className="menuItem">
                {genereateLink(props.user)}
            </li>
            <li className="menuItem container">
                <a href="signIn.html">Выйти</a>
            </li>
        </ul>);
    }
};

export default MenuProfile;