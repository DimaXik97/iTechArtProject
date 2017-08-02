import React from 'react';

import UserInfo from "./../UserInfo/index.jsx"
import UserStatistics from "./../UserStatistics/index.jsx"
import ContainerElements from "./../ContainerElements/index.jsx"

const User = ({user})=> {
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  let userQuestions=(<ContainerElements url={"/admin/question"} data={user.questions.map((element)=>{return {id:element.id, text: `${element.test} (${element.categories}) ${element.date}`}})}/>);
  return (
    <main>
        <UserInfo user={{name:user.name, surname: user.surname}} photo={user.photo} isAdmin={isAdmin}/>
        <UserStatistics statistics={user.statistics}/>
        {isAdmin?userQuestions:undefined}
    </main>
  );
};
export default User;