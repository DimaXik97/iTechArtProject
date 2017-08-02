import React from 'react';

import QuestionItem from './item.jsx';
import ContainerElements from "./../ContainerElements/index.jsx";

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

const QuestionList = ({questions,addQuestion,deleteQuestion,changeQuestion, usersAnswers})=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    let usersTests=(<div>
        <h2 className="title">Ответы пользователей:</h2>
        <ContainerElements url={"/admin/question"} data={usersAnswers.map((element)=>{return {id:element.id, text: `${element.user} ${element.date}`}})}/>
    </div>);
  return (
    <main>
        <form>
            <ul>
                {questions.map((element, num)=>{
                    return <QuestionItem key={num} item={element} deleteQuestion={deleteQuestion} changeQuestion={changeQuestion} isAdmin={isAdmin}/> 
                })}
            </ul>
            <input className="default-btm" type="submit" value={isAdmin?"Сохранить":"Отправить ответы"}/>
            {isAdmin?<input className="default-btm" type="submit" value={"Добавить вопрос"} onClick={(e)=>{e.preventDefault(); addQuestion()}}/>:undefined}
        </form>
       {isAdmin?usersTests:undefined} 
    </main>
  );
};
export default QuestionList;