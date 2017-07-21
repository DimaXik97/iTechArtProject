import React from 'react';

const SignUp =()=>{
    return (<div className="authentication">
        <h1 className="title">Регистрация</h1>
        <form>
            <fieldset>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Пароль"/>
                    <input type="password" placeholder="Подтвердите пароль"/>
                    <input type="text" placeholder="Фамилия"/>
                    <input type="text" placeholder="Имя"/>
                    <input className="default-btm" type="submit" value="Зарегестрироваться"/>
            </fieldset>
        </form>
    </div>);
};

export default SignUp;