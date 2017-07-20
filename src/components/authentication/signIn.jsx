import React from 'react';

const SignIn =()=>{
        return <fieldset>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Пароль"/>
                <input className="default-btm" type="submit" value="Войти"/>
                <button className="default-btm">Регистрация</button>
            </fieldset>;
};

export default SignIn;