import React from 'react';

import Text from './text.jsx';
import Select from './select.jsx';

let isAdmin;

function getAnswer(item){
    switch(item.type){
        case 1:{
            return item.answers.map((element, num)=>{
                return(<Select type={"radio"} key={num} id={item.id} answer={element} isAdmin={isAdmin}/>)
            })
        }
        case 2:{
            return item.answers.map((element, num)=>{
                return (<Select type={"checkbox"} key={num} id={item.id} answer={element} isAdmin={isAdmin}/>)
            })
        }
        case 3:{
            return <Text/>;
        }
    }
}
let adminBtm=<span><span className="edit"> </span><span className="delete"> </span></span>;

const QuestionItem = (props)=> {
    isAdmin=props.isAdmin;
    return (
        <li className="question">
            <h2 className="title">
                {props.item.question}{isAdmin?adminBtm:undefined}
            </h2>
            <fieldset>
                {getAnswer(props.item)}
            </fieldset>
        </li>
  );
};
export default QuestionItem;