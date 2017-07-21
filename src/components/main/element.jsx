import React from 'react';
import {Link} from 'react-router-dom';


function adminElements(isAdmin)
{
    console.log(isAdmin);
    let admineIements="";
    if(isAdmin){
        admineIements=(<p className="adminMenu">
                    <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                </p>)
    }
    return admineIements;
}

const Element = (props)=> {
  return (
    <ul className="container">
        {props.categories.map((element, num)=>{
            return (
                <li key={element.id} className="element">
                    <Link to={props.url+"/"+element.id} className="content-center">{element.name}
                        {adminElements(props.isAdmin)}
                    </Link>

                </li>)
        })}
    </ul>
  );
};
export default Element;