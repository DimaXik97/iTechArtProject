import React from 'react';

import BodyContent from './bodyContent.jsx';
let vacancies=[{title:" Новая вакансия №1",
    text:"jdfsgkjdfjgn"
},{title:"Новая вакансия №2",
    text:"jdfsgkjdfjgn"
},
{title:"Новая вакансия №3",
    text:"jdfsgkjdfjgn"
}];

const Vacancies = ()=> {
    return (<BodyContent content={vacancies}/>);
};
export default Vacancies;