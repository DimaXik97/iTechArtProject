import React from 'react';
import {Link} from 'react-router-dom';

const SignIn =()=>{
        return (<div className="authentication">
                <h1 className="title">Авторизация</h1>
                <form>
                        <fieldset>
                                <input type="email" placeholder="E-mail"/>
                                <input type="password" placeholder="Пароль"/>
                                <input className="default-btm" type="submit" value="Войти"/>
                                <Link to="/signUp"><button className="default-btm">Регистрация</button></Link>
                        </fieldset>
                </form>
        </div>);
};
export default SignIn;