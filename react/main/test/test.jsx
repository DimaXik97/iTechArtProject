import React from 'react';
import Element from "./../element.jsx"

const Test = (props)=> {
    console.log(props.tests);
  return (
    <main>
        <h1 className="title">Выберете тест:</h1>
        <Element categories={props.tests}/>
    </main>
  );
};
export default Test;