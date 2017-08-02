import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

const Users = ({users})=> {
    console.log(users);
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main >
        <h1 className="title">Выберете пользователя:</h1>
        <ContainerElements url={window.location.pathname} data={users.map((element)=>{return {id:element.id, text: `${element.surName} ${element.name}`}})}/>
    </main>
  );
};
export default Users;