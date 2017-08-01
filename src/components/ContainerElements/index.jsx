import React from 'react';
import {Link} from 'react-router-dom';


let admineIements=(deleteElement,id)=>{return (<p className="adminMenu">
    <span className="edit"></span> <span className="delete" onClick={(e)=>{e.preventDefault(); deleteElement(id)}}></span>
</p>)
};

let addElement=(addElement)=>{return(<li className="element">
    <div className="content-center adminMenu" onClick={addElement}>
        <span className="add"></span>
    </div>
</li>)}

const Element = (props)=> {
  return (
    <ul className="container">
        {props.data.map((element, num)=>{
            return (
                <li key={element.id} className="element">
                    <Link to={props.url+"/"+element.id} className="content-center">{element.text}
                        {props.isAdmin?admineIements(props.deleteElement, element.id):undefined}
                    </Link>
                    {props.isAdmin?<input type="checkbox" className="isReady" checked={element.isReady} onChange={(e)=>{props.changeCheckBox(element.id)}}/>:null}
                </li>)
        })}
        {props.isAdmin?addElement(props.addElement):undefined}
    </ul>
  );
};
export default Element;