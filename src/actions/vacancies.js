export const getVacancies= ()=>({
    type: 'GET_VACANCIES'
})
export const initVacancies =(vacancies)=>({
    type: 'INIT_VACANCIES',
    vacancies: vacancies
})