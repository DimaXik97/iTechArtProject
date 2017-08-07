/*const initState=[
    {
        title: "Вакансия №1",
        text: "Требуется специалист в отдел N"
    },
    {
        title: "Вакансия №2",
        text: "Требуется специалист в отдел N"
    },
    {
        title: "Вакансия №3",
        text: "Требуется специалист в отдел N"
    }
]*/
const vacancies = (state = [], action) => {
    switch(action.type){
        case 'INIT_VACANCIES':{
            return action.vacancies
        }
    }
    return state;
}

export default vacancies;