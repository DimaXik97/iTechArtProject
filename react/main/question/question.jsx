import React from 'react';
import QuestionItem from './item.jsx';
let questions=[
    {
        id: 1,
        type: 1,
        question: "Первый вопрос?",
        answers: [{id:1, text: "Первый ответ"},
         {id:2, text: "Второй ответ"},
         {id: 3, text: "Третий ответ"},
         {id: 4, text: "Четвертый ответ"}]
    },
    {
        id: 2,
        type: 2,
        question: "Второй вопрос?",
        answers: [{id:1, text: "Первый ответ" },
         {id:2, text: "Второй ответ"},
         {id: 3, text: "Третий ответ"},
         {id: 4, text: "Четвертый ответ"}]
    },
    {
        id: 3,
        type: 3,
        question: "Третий вопрос?"
    },

]

const QuestionList = ()=> {
  return (
    <main>
        <form>
            <ul>
                {questions.map((element, num)=>{
                    return <QuestionItem key={num} item={element}/> 
                })}
            </ul>
            <input className="default-btm" type="submit" value="Отправить ответы"/>
        </form>
    </main>
  );
};
export default QuestionList;