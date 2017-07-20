import React from 'react';
import Element from "./../components/main/element.jsx"

let categories=[{
    name: "C#"
},{
    name: "C++"
},
{
    name: "Java"
},
{
    name: "Ruby"
},
{
    name: "JS"
},
{
    name: "HTML"
},
{
    name: "CSS"
},
{
    name: "XML"
}];


const Categories = ()=> {
  return (
    <main >
        <h1 className="title">Выберете категорию:</h1>
        <Element categories={categories}/>
    </main>
  );
};
export default Categories ;