import React from 'react';

import Item from './item.jsx';

let statistics=[
    {
        data: "Дата регистрации",
        value: "12.12.2017"
    },
    {
        data: "Количество прошедших тестов",
        value: "99"
    },
    {
        data: "Самый посещаемый раздел",
        value: "C#"
    },
    {
        data:"Количество правельных",
        value: "52"
    },
    {
        data: "Количество неправельных",
        value: "47"
    }
];

const UserStatistics = ()=> {
  return (
    <ul className="userStatistics container">
        {statistics.map((element, num)=>{
            return <Item key={num} element={element}/>
        })}
    </ul>
  );
};
export default UserStatistics;