import React from 'react';

import UserInfo from "./userInfo/userInfo.jsx";
import UserStatistics from "./userStatistics/userStatistics.jsx"

const User = ()=> {
  return (
    <main>
        <UserInfo/>
        <UserStatistics/>
    </main>
  );
};
export default User;