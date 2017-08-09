let idNew=8;
export const initCategories=(data)=>({
    type: "INIT_CATEGORIES",
    categories: data 
})
export const getCategories=()=>({
    type: "GET_CATEGORIES",
})
export const changeOrderFieldCategory=(field)=>({
    type: "CHANGE_ORDER_FIELD_CATEGORIES",
    field: field
})
export const addСategory = ()=>({
    type: 'ADD_CATEGORY',
    id: ++idNew,
    name: "New Category!",
    date: `${(new Date()).getFullYear()}.${(new Date()).getMonth()}.${(new Date()).getDate()}`,
    isReady: false
})
export const deleteCategory= (id)=>({
    type: 'DELETE_CATEGORY',
    id: id
})
export const changeCategory= (id)=>({
    type: 'CHANGE_CATEGORY',
    id: id
})