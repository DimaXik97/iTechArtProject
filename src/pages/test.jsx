import React from 'react';
import Element from "./../components/main/element.jsx"

let categories=[{
    id: 1,
    name: "Типы данных, переменные, операторы, циклы, массивы"
},{
    id: 2,
    name: "ООП"
},{
    id: 3,
    name: "Исключения"
},{
    id: 4,
    name: "Коллекции"
},{
    id: 5,
    name: "Строки"
},{
    id: 6,
    name: "Потоки ввода/вывода"
},{
    id: 7,
    name: " Потоки выполнения"
},{
    id: 8,
    name: "SQL, JDBC"
},{
    id: 9,
    name: "JSP"
},{
    id: 10,
    name: "Servlet"
},];


const Test = ()=> {
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <h1 className="title">Выберете тест:</h1>
        <Element url={window.location.pathname} data={categories.map((element)=>{return {id:element.id, text: element.name}})} isAdmin={isAdmin}/>
    </main>
  );
};
export default Test;