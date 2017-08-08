/*const initState=[
    {
        id: 1,
        name: "C#",
        isReady: true
    },
    {
        id: 2,
        name: "C++",
        isReady: true
    },
    {
        id: 3,
        name: "Java",
        isReady: true
    },
    {
        id: 4,
        name: "Ruby",
        isReady: true
    },
    {
        id: 5,
        name: "JS",
        isReady: true
    },
    {
        id: 6,
        name: "HTML",
        isReady: true
    },
    {
        id: 7,
        name: "CSS",
        isReady: true
    },
    {
        id: 8,
        name: "XML",
        isReady: true
    }
]*/
const categories = (state = {categories:[], flag: true}, action) => {
    switch (action.type) {
    case 'INIT_CATEGORIES':{
        return Object.assign({}, state, {
            categories: action.categories});
    }
    case "SORT_CATEGORIES":{
        return Object.assign({}, state, {
            flag: action.flag});
    }
    case 'ADD_CATEGORY':{
        return Object.assign({}, state, {
            categories: [
                ...state.categories,
                {
                    id: action.id,
                    name: action.name,
                    isReady: action.isReady,
                    date: action.date
                }
            ]
        }); 
    }
    case 'DELETE_CATEGORY':{
        return Object.assign({}, state, {
            categories: state.categories.filter(element => element.id !== action.id)
        }); 
    }
    case 'CHANGE_CATEGORY':{
        return Object.assign({}, state, {
                categories: state.categories.map(element => {
                if(element.id==action.id) 
                    element.isReady=(!element.isReady);
                return element
            })
        }); 
    }
    default:
      return state
    }
}

export default categories;