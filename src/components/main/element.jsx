import React from 'react';
import {Link} from 'react-router-dom';


function adminElements(isAdmin)
{
    console.log(isAdmin);
    let admineIements="";
    if(isAdmin){
        admineIements=(<p className="adminMenu">
                    <span className="edit" onClick="raz(event)"></span> <span className="delete"></span>
                </p>)
    }
    return admineIements;
}
function addElement(isAdmin){
    let element="";
    if(isAdmin){
            element=(<li className="element">
            <div className="content-center adminMenu">
                <span className="add"></span>
            </div>
        </li>)
    }
    return element;
}

const Element = (props)=> {
  return (
    <ul className="container">
        {props.data.map((element, num)=>{
            return (
                <li key={element.id} className="element">
                    <Link to={props.url+"/"+element.id} className="content-center">{element.text}
                        {adminElements(props.isAdmin)}
                    </Link>
                </li>)
        })}
        {addElement(props.isAdmin)}
    </ul>
  );
};
export default Element;