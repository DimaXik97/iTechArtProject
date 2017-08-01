import React from 'react';
import {Link} from 'react-router-dom';


let admineIements=(<p className="adminMenu">
    <span className="edit" onClick="raz(event)"></span> <span className="delete"></span>
    <input type="checkbox" className="isReady"/>
</p>);

let addElement=(<li className="element">
    <div className="content-center adminMenu">
        <span className="add"></span>
    </div>
</li>)

const Element = (props)=> {
  return (
    <ul className="container">
        {props.data.map((element, num)=>{
            return (
                <li key={element.id} className="element">
                    <Link to={props.url+"/"+element.id} className="content-center">{element.text}
                        {props.isAdmin?admineIements:undefined}
                    </Link>
                </li>)
        })}
        {props.isAdmin?addElement:undefined}
    </ul>
  );
};
export default Element;