import React from 'react';

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

const Element = (props)=> {
  return (
    <ul className="container">
        {categories.map((element, num)=>{
            return (
                <li key={num} className="element">
                    <a className="content-center" href="subject.html">
                        {element.name}
                    </a>
                </li>)
        })}
    </ul>
  );
};
export default Element;