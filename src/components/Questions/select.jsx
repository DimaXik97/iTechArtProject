import React from 'react';

let adminBtm=<span><span className="edit"> </span></span>;

const Select = (props)=> {
  return (<p>
    <input name={props.type+"-"+props.id} type={props.type}/> {props.answer} {props.isAdmin?adminBtm:undefined}
  </p>);
};
export default Select;