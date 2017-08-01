import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

const Categories = ({categories, addСategory,deleteCategory, changeCategory})=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main >
        <h1 className="title">Выберете категорию:</h1>
        <ContainerElements url={window.location.pathname} data={categories.map((element)=>{return {id:element.id, text: element.name, isReady: element.isReady}})} isAdmin={isAdmin} addElement={addСategory} deleteElement={deleteCategory} changeCheckBox={changeCategory}/>
    </main>
  );
};
export default Categories;