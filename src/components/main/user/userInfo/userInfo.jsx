import React from 'react';

import UserMenu from "./userMenu.jsx";
import UserName from "./userName.jsx";
import UserPhoto from "./userPhoto.jsx";

const UserInfo = (props)=> {
  return (
      <div className="userInfo container">
        <UserPhoto/>
        <UserName/>
        <UserMenu isAdmin={props.isAdmin}/>
      </div>
  );
};
export default UserInfo;