let idNew=8;
export const addСategory = ()=>({
    type: 'ADD_CATEGORY',
    id: ++idNew,
    name: "New Category!",
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