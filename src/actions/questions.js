let idNew=4;
export const addQuestion = ()=>({
    type: 'ADD_QUESTION',
    id: ++idNew,
    isReady: false,
    typeQuestions: 2,
    question: `New ${idNew} Questions!`,
    answers: [ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"] 
})
export const deleteQuestion= (id)=>({
    type: 'DELETE_QUESTION',
    id: id
})
export const changeQuestion= (id)=>({
    type: 'CHANGE_QUESTION',
    id: id
})