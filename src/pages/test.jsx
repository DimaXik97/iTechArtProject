import React from 'react';
import Element from "./../components/main/element.jsx"

let categories=[{
    id: 1,
    name: "C#"
},{
    id: 2,
    name: "C++"
},
{
    id: 3,
    name: "Java"
},
{
    id: 4,
    name: "Ruby"
},
{
    id: 5,
    name: "JS"
},
{
    id: 6,
    name: "HTML"
},
{
    id: 7,
    name: "CSS"
},
{
    id: 8,
    name: "XML"
}];


const Test = ()=> {
  return (
    <main>
        <h1 className="title">Выберете тест:</h1>
        <Element url={window.location.pathname} categories={categories}/>
    </main>
  );
};
export default Test;