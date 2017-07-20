import React from 'react';

import UserInfo from "./../components/main/user/userInfo/userInfo.jsx";
import UserStatistics from "./../components/main/user/userStatistics/userStatistics.jsx"

const User = ()=> {
  return (
    <main>
        <UserInfo/>
        <UserStatistics/>
    </main>
  );
};
export default User;