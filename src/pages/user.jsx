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

let userQuestions=(<Element url={"/admin/question"} data={questions.map((element)=>{return {id:element.id, text: `${element.test} (${element.categories}) ${element.date}`}})}/>);
 

const User = ()=> {
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  console.log("isAdmin",isAdmin);
  return (
    <main>
        <UserInfo isAdmin={isAdmin}/>
        <UserStatistics/>
        {isAdmin?userQuestions:undefined}
    </main>
  );
};
export default User;