import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

const Test = ({tests,addTest,deleteTest, changeTest})=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <h1 className="title">Выберете тест:</h1>
        <ContainerElements url={window.location.pathname} data={tests.map((element)=>{return {id:element.id, text: element.name, isReady: element.isReady}})} isAdmin={isAdmin} addElement={addTest} deleteElement={deleteTest} changeCheckBox={changeTest}/>
    </main>
  );
};
export default Test;