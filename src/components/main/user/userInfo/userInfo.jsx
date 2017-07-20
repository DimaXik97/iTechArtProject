import React from 'react';

import UserMenu from "./userMenu.jsx";
import UserName from "./userName.jsx";
import UserPhoto from "./userPhoto.jsx";

const UserInfo = ()=> {
  return (
      <div className="userInfo container">
        <UserPhoto/>
        <UserName/>
        <UserMenu/>
      </div>
  );
};
export default UserInfo;