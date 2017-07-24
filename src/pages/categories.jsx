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

const Categories = ()=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main >
        <h1 className="title">Выберете категорию:</h1>
        <Element url={window.location.pathname} data={categories.map((element)=>{return {id:element.id, text: element.name}})} isAdmin={isAdmin}/>
    </main>
  );
};
export default Categories ;