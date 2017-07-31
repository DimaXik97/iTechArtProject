import React from 'react';

import Item from './itemContent.jsx';
let vacancies=[{title:" Новая вакансия №1",
    text:"jdfsgkjdfjgn"
},{title:"Новая вакансия №2",
    text:"jdfsgkjdfjgn"
},
{title:"Новая вакансия №3",
    text:"jdfsgkjdfjgn"
}];

const Vacancies = ()=> {
    return (
    <div className="content">
        {
            vacancies.map((element,num)=>{
                 return <Item key={num} title={element.title} text={element.text}/>
            })
        }
    </div>
    );
};
export default Vacancies;