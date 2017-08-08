let idNew=8;
export const initCategories=(data)=>({
    type: "INIT_CATEGORIES",
    categories: data 
})
export const sortCategories= (flag)=>({
    type: 'SORT_CATEGORIES',
    flag: flag
})
export const getCategories=()=>({
    type: "GET_CATEGORIES",
})
export const addСategory = ()=>({
    type: 'ADD_CATEGORY',
    id: ++idNew,
    name: "New Category!",
    date: '2017.08.08',
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