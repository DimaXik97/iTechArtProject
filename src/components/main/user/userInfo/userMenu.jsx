import React from 'react';

const userBtm=
    {admin: ["Заблокировать"],
    user: ["Изменить фотографию", "Изменить имя", "Изменить пароль"]};

function generateBtm(isAdmin){
    if(isAdmin)
        return userBtm.admin;
    else
        return userBtm.user;
}
const UserMenu = (props)=> {
  return (
    <div className="profileMenu">
        {generateBtm(props.isAdmin).map((element)=>{
            return (<button className="default-btm">{element}</button>)
        })}
    </div>
  );
};
export default UserMenu;