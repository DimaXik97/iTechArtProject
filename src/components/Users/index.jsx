import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

let users=[{
    id: 1,
    name: "1",
    surName: "User"
},{
    id: 2,
    name: "2",
    surName: "User"
},{
    id: 3,
    name: "3",
    surName: "User"
},{
    id: 4,
    name: "4",
    surName: "User"
},{
    id: 5,
    name: "5",
    surName: "User"
},{
    id: 6,
    name: "6",
    surName: "User"
},{
    id: 7,
    name: "726262",
    surName: "User"
},{
    id: 8,
    name: "8",
    surName: "User"
}];

const Users = ()=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main >
        <h1 className="title">Выберете пользователя:</h1>
        <ContainerElements url={window.location.pathname} data={users.map((element)=>{return {id:element.id, text: `${element.surName} ${element.name}`}})}/>
    </main>
  );
};
export default Users;