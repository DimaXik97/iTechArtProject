import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

const Categories = ({categories, addCategory})=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    console.log(categories);
  return (
    <main >
        <h1 className="title">Выберете категорию:</h1>
        <ContainerElements url={window.location.pathname} data={categories.map((element)=>{return {id:element.id, text: element.name}})} isAdmin={isAdmin} addElement={addCategory}/>
    </main>
  );
};
export default Categories;