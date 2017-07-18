import React from 'react';
import Element from "./../element.jsx"

const Categories = (props)=> {
    console.log(props.categories);
  return (
    <main >
        <h1 className="title">Выберете категорию:</h1>
        <Element categories={props.categories}/>
    </main>
  );
};
export default Categories ;