export const getUsers= ()=>({
    type: 'GET_USERS'
})
export const initUsers =(users)=>({
    type: 'INIT_USERS',
    users: users
})
export const changeOrderFieldUsers=(field)=>({
    type: "CHANGE_ORDER_FIELD_USERS",
    field: field
})