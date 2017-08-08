const initState= {
    tests:[],
    field: 'date',
    orderFields:[
        {
            value: "date",
            text:"По дате"},
        {
            value: "name",
            text:"По названию"
        }
    ]
}
const tests = (state =initState, action) => {
    switch (action.type) {
    case 'INIT_TESTS':{
        return Object.assign({}, state, {
            tests: action.tests});
    }
    case "SORT_TESTS":{
        return Object.assign({}, state, {
            flag: action.flag});
    }
    case 'ADD_TEST':{
        return Object.assign({}, state, {
            tests: [
                ...state.tests,
                {
                    id: action.id,
                    name: action.name,
                    isReady: action.isReady,
                    date: action.date
                }
            ]
        }); 
    }
    case 'DELETE_TEST':{
        return Object.assign({}, state, {
            tests: state.tests.filter(element => element.id !== action.id)
        }); 
    }
    case 'CHANGE_TEST':{
        return Object.assign({}, state, {
                tests: state.tests.map(element => {
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
export default tests;