import React from 'react';

const Select = (props)=> {
  return (<p>
    <input name={props.type+"-"+props.id} type={props.type} value={props.answer.value}/> {props.answer.text}
  </p>);
};
export default Select;