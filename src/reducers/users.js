/*const initState=[
    {
        id: 1,
        name: "1",
        surName: "User"
    },
    {
        id: 2,
        name: "2",
        surName: "User"
    },
    {
        id: 3,
        name: "3",
        surName: "User"
    },
    {
        id: 4,
        name: "4",
        surName: "User"
    },
    {
        id: 5,
        name: "5",
        surName: "User"
    },
    {
        id: 6,
        name: "6",
        surName: "User"
    },
    {
        id: 7,
        name: "726262",
        surName: "User"
    },
    {
        id: 8,
        name: "8",
        surName: "User"
    }
];*/
const users = (state = [],action) => {
    switch(action.type){
        case 'INIT_USERS':{
            return action.users
        }
    }
    return state;
}

export default users;