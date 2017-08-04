/*const initState=[
    {
        id: 1,
        name: "Типы данных, переменные, операторы, циклы, массивы",
        isReady: true
    },
    {
        id: 2,
        name: "ООП",
        isReady: true
    },
    {
        id: 3,
        name: "Исключения",
        isReady: true
    },
    {
        id: 4,
        name: "Коллекции",
        isReady: true
    },
    {
        id: 5,
        name: "Строки",
        isReady: true
    },
    {
        id: 6,
        name: "Потоки ввода/вывода",
        isReady: true
    },
    {
        id: 7,
        name: " Потоки выполнения",
        isReady: true
    },
    {
        id: 8,
        name: "SQL, JDBC",
        isReady: true
    },
    {
        id: 9,
        name: "JSP",
        isReady: true
    },
    {
        id: 10,
        name: "Servlet",
        isReady: true
    }
]*/
const tests = (state = [], action) => {
    switch (action.type) {
    case 'INIT_TESTS':{
        console.log("action",action);
        return action.tests
    }
    case 'ADD_TEST':{
        return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    isReady: action.isReady
                }
            ]
    }
    case 'DELETE_TEST':{
        return state.filter(element => element.id !== action.id);
    }
    case 'CHANGE_TEST':{
        return state.map(element => {
            if(element.id==action.id)
                element.isReady=(!element.isReady);
            return element
        })
    }
    default:
      return state
    }
}
export default tests;