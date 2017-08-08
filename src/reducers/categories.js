const initState={
    categories:[],
    field: 'date',
    orderFields:[
        {
            value: "date",
            text:"По дате"},
        {
            value: "name",
            text:"По названию"
        }]
}
const categories = (state = initState, action) => {
    switch (action.type) {
    case 'INIT_CATEGORIES':{
        return Object.assign({}, state, {
            categories: action.categories});
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