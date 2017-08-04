let idNew=10;

export const initTest =(tests)=>({
    type: 'INIT_TESTS',
    tests: tests
})
export const getTests =(id)=>({
    type: 'GET_TESTS',
    idCategory: id
})
export const addTest = ()=>({
    type: 'ADD_TEST',
    id: ++idNew,
    name: "New TEST!",
    isReady: false
})
export const deleteTest= (id)=>({
    type: 'DELETE_TEST',
    id: id
})
export const changeTest= (id)=>({
    type: 'CHANGE_TEST',
    id: id
})