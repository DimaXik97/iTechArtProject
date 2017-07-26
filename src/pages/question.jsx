import React from 'react';

import QuestionItem from './../components/main/question/item.jsx';
import Element from "./../components/main/element.jsx";

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

];
let tests=[{
  id: 1,
  user: {
      name: "1",
      surName: "user"
  },
  date: "10.12.2017"
},{
  id: 2,
  user: {
      name: "2",
      surName: "user"
  },
  date: "10.12.2017"
},{
  id: 3,
  user: {
      name: "4",
      surName: "user"
  },
  date: "11.12.2017"
},{
  id: 4,
  user: {
      name: "2",
      surName: "user"
  },
  date: "13.12.2017"
}];

let usersTests=(<div>
        <h2 className="title">Ответы пользователей:</h2>
        <Element url={"/admin/question"} data={tests.map((element)=>{return {id:element.id, text: `${element.user.surName} ${element.user.name} ${element.date}`}})}/>
    </div>);

const QuestionList = ()=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <form>
            <ul>
                {questions.map((element, num)=>{
                    return <QuestionItem key={num} item={element} isAdmin={isAdmin}/> 
                })}
            </ul>
            <input className="default-btm" type="submit" value={isAdmin?"Сохранить":"Отправить ответы"}/>
            {isAdmin?<input className="default-btm" type="submit" value={"Добавить вопрос"}/>:undefined}
        </form>
       {isAdmin?usersTests:undefined} 
    </main>
  );
};
export default QuestionList;