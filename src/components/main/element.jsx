import React from 'react';

const Element = (props)=> {
  return (
    <ul className="container">
        {props.categories.map((element, num)=>{
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