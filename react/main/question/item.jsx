import React from 'react';

import Text from './typeQuestion/text.jsx';
import Select from './typeQuestion/select.jsx';

function getAnswer(item){
    switch(item.type){
        case 1:{
            return item.answers.map((element, num)=>{
                return(<Select type={"radio"} key={num} id={item.id} answer={element}/>)
            })
        }
        case 2:{
            return item.answers.map((element, num)=>{
                return (<Select type={"checkbox"} key={num} id={item.id} answer={element}/>)
            })
        }
        case 3:{
            return <Text/>;
        }
    }
}

const QuestionItem = (props)=> {
    return (
        <li className="question">
            <h2 className="title">
                {props.item.question}
            </h2>
            <fieldset>
                {getAnswer(props.item)}
            </fieldset>
        </li>
  );
};
export default QuestionItem;