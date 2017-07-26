import React from 'react';

import Answer from './../components/answer.jsx';

let answers=[
    {
        id: 1,
        type: 1,
        question: "Первый вопрос?",
        answers: [{id:1, text: "Первый ответ", atrr:[]},
         {id:2, text: "Второй ответ",atrr:["user"]},
         {id: 3, text: "Третий ответ", atrr:["correct"]},
         {id: 4, text: "Четвертый ответ", atrr:[]}]
    },
    {
        id: 2,
        type: 2,
        question: "Второй вопрос?",
        answers: [{id:1, text: "Первый ответ", atrr:[] },
         {id:2, text: "Второй ответ", atrr:["user","correct"]},
         {id: 3, text: "Третий ответ", atrr:["user"]},
         {id: 4, text: "Четвертый ответ", atrr:["user","correct"]}]
    },
    {
        id: 3,
        type: 3,
        question: "Третий вопрос?",
        correctAnswer: {text: "2", atrr:["correct"]},
        userAnswer: {text: "3", atrr:["user"]}
    },

];
const AnswerList = ()=> {
    console.log("okkkkk");
  return (
    <main>
        <ul>
            {
                answers.map((element, num)=>{
                    return <Answer key={num} answer={element}/>
            })}
        </ul>
    </main>
  );
};
export default AnswerList;