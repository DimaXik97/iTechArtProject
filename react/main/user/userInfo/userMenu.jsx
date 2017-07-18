import React from 'react';

const userBtm=
    {admin: ["Заблокировать"],
    user: ["Изменить фотографию", "Изменить имя", "Изменить пароль"]};

function generateBtm(user){
    if(user=="admin")
        return userBtm.admin;
    else
        return userBtm.user;
}
const UserMenu = ()=> {
  return (
    <div className="profileMenu">
        {generateBtm("admin").map((element)=>{
            return (<button className="default-btm">{element}</button>)
        })}
    </div>
  );
};
export default UserMenu;