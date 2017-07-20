import React from 'react';

const SignUp =()=>{
    return (<fieldset>
              <input type="email" placeholder="E-mail"/>
              <input type="password" placeholder="Пароль"/>
              <input type="password" placeholder="Подтвердите пароль"/>
              <input type="text" placeholder="Фамилия"/>
              <input type="text" placeholder="Имя"/>
              <input className="default-btm" type="submit" value="Зарегестрироваться"/>
    </fieldset>);
};

export default SignUp;