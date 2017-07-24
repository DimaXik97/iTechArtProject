import React from 'react';

import UserInfo from "./../components/main/user/userInfo/userInfo.jsx";
import UserStatistics from "./../components/main/user/userStatistics/userStatistics.jsx"
import Element from "./../components/main/element.jsx"

let questions=[{
  id: 1,
  categories: "Java",
  test: "JSP",
  date: "10.12.2017"
},{
  id: 2,
  categories: "Java",
  test: "Servlet",
  date: "10.12.2017"
},{
  id: 3,
  categories: "C#",
  test: "ООП",
  date: "11.12.2017"
},{
  id: 4,
  categories: "Java",
  test: "Коллекции",
  date: "13.12.2017"
}];


function userQuestions(isAdmin)
{
  let userQuestions="";
  if(isAdmin){
    userQuestions=(<Element url={"/admin/question"} data={questions.map((element)=>{return {id:element.id, text: `${element.test} (${element.categories}) ${element.date}`}})}/>);
  }
  return userQuestions;
}

const User = ()=> {
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <UserInfo/>
        <UserStatistics/>
        {
          userQuestions(isAdmin)
        }
    </main>
  );
};
export default User;