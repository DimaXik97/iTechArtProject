export const getUsers= ()=>({
    type: 'GET_USERS'
})
export const initUsers =(users)=>({
    type: 'INIT_USERS',
    users: users
})