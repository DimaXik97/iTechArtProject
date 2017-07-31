import React from 'react';

import UserInfo from "./../UserInfo/index.jsx"
import UserStatistics from "./../UserStatistics/index.jsx"
import ContainerElements from "./../ContainerElements/index.jsx"

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

 let userQuestions=(<ContainerElements url={"/admin/question"} data={questions.map((element)=>{return {id:element.id, text: `${element.test} (${element.categories}) ${element.date}`}})}/>);

const User = ()=> {
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;

  return (
    <main>
        <UserInfo isAdmin={isAdmin}/>
        <UserStatistics/>
        {isAdmin?userQuestions:undefined}
    </main>
  );
};
export default User;