import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SignIn from './components/Authentication/signIn.jsx';
import SignUp from './components/Authentication/signUp.jsx';
import Main from './components/Main/index.jsx';

const initialState = {
    categories: [{
        id: 1,
        name: "C#",
        isReady: true
    },{
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
    }],
    tests:[{
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
    }],
    users:[{
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
    }],
    user:{
        name: "Имя123",
        surname: "Фамилия",
        photo: "/img/default_photo.png",
        statistics:[
            {
                data: "Дата регистрации",
                value: "12.12.2017"
            },
            {
                data: "Количество прошедших тестов",
                value: "99"
            },
            {
                data: "Самый посещаемый раздел",
                value: "C#"
            },
            {
                data:"Количество правельных",
                value: "52"
            },
            {
                data: "Количество неправельных",
                value: "47"
            }
        ],
        questions:[
            {
                id: 1,
                categories: "Java",
                test: "JSP",
                date: "10.12.2017"
                },
            {
                id: 2,
                categories: "Java",
                test: "Servlet",
                date: "10.12.2017"
            },
            {
                id: 3,
                categories: "C#",
                test: "ООП",
                date: "11.12.2017"
            },
            {
                id: 4,
                categories: "Java",
                test: "Коллекции",
                date: "13.12.2017"
            }
        ]
    },
    vacancies:[
        {
            title: "Вакансия №1",
            text: "Требуется специалист в отдел N"
        },
        {
            title: "Вакансия №2",
            text: "Требуется специалист в отдел N"
        },
        {
            title: "Вакансия №3",
            text: "Требуется специалист в отдел N"
        }
    ],
    news:[
        {
            title: "Новость №1",
            img: "/img/default_img.png",
            text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\" Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам \"lorem ipsum\" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты)."
        },
        {
            title: "Новость №2",
            img: "/img/default_img.png",
            text: "Активные увольнения, средняя зарплата, далекая от идеала, затянувшаяся уборочная и посылки белорусов из-за рубежа — все это стало самыми главными новостями за среду, 26 июля. Теперь их можно не только смотреть в социальных сетях в рамках проекта «Короткая лента», но и слушать в аудиоверсии на удобных мобильных платформах."
        },
        {
            title: "Новость №3",
            img: null,
            text: "Инцидент произошел в пятницу утром на железнодорожной станции Французский Вокзал. Пригородный поезд, вышедший со станции Сант-Винсенс-де Кальдерс (провинция Таррагона) врезался носом в оградительную платформу. По предварительной версии, машинист не успел затормозить. В железнодорожной компании Renfe пока не комментируют причины происшествия."
        },
        {
            title: "Новость №4",
            img: "/img/default_img.png",
            text: "Сотрудники ФСБ задержали семерых подозреваемых в подготовке терактов в Санкт-Петербурге, сообщает спецслужба. Ространснадзор планирует усилить меры безопасности в метро Операция по задержанию прошла в пятницу. Все семеро подозреваемых — выходцы из Центральной Азии. По данным ФСБ, они планировали атаки на железнодорожном транспорте и в местах массового скопления людей."
        },
        {
            title: "Новость №5",
            img: null,
            text: "Вашингтону предписали оставить в России 455 сотрудников посольства и консульств — столько же российских дипломатов находятся в США. \"В случае новых односторонних действий американских властей по сокращению численности наших дипломатов в США за этим последует зеркальный ответ\", — подчеркнули в ведомстве."
        },
        {
            title: "Новость №6",
            img: "/img/default_img.png",
            text: "Утром во вторник на шоссе столкнулись четыре машины. Одна из них – Mercedes — впоследствии загорелась, пострадали четыре человека. По предварительным данным, аварию спровоцировал водитель Mercedes, устроив \"шашки\" на дороге; после ДТП он убежал. При этом в СМИ сообщалось, что речь идет о сыне бывшего гендиректора МГТС Михаила Смирнова."
        }
    ],
    questions:[
        {
            id:1,
            type:1,
            isReady: true,
            question:"C# Переменные 1 Вопрос?",
            answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
        },
        {
            id:2,
            type:2,
            isReady: true,
            question:"C# Переменные 2 Вопрос?",
            answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
        },
        {
            id:3,
            type:1,
            isReady: true,
            question:"C# Переменные 3 Вопрос?",
            answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
        },
        {
            id: 4,
            type: 3,
            isReady: true,
            question: "C# Переменные 4 Вопрос?",
            answers: null
        }
    ],
    answers:[
    ]
};
let id=8;
let idTest=10;
let idQuestion= 4;
function rootReducer(state = initialState, action) {
    switch(action.type)
    {
        case 'ADD_CATEGORY':{
            return Object.assign({}, state, {
                categories: [
                ...state.categories,
                {
                    id: ++id,
                    name: "New Category!",
                    isReady: false
                }
            ]});
        }
        case 'DELETE_CATEGORY':{
            return Object.assign({}, state, {
                categories: state.categories.filter(element => element.id !== action.data)});
        }
        case 'CHANGE_CATEGORY':{
            return Object.assign({}, state, {
                categories: state.categories.map(element => {if(element.id==action.data) {element.isReady=(!element.isReady)}; return element})
            })
        }
        case 'ADD_TEST':{
            return Object.assign({}, state, {
                tests: [
                ...state.tests,
                {
                    id: ++idTest,
                    name: "New Test!",
                    isReady: false
                }
            ]});
        }
        case 'DELETE_TEST':{
            return Object.assign({}, state, {
                tests: state.tests.filter(element => element.id !== action.data)});
        }
        case 'CHANGE_TEST':{
            return Object.assign({}, state, {
                tests: state.tests.map(element => {if(element.id==action.data) {element.isReady=(!element.isReady)}; return element})
            })
        }
        case 'ADD_QUESTION':{
            return Object.assign({}, state, {
                questions: [
                ...state.questions,
                {
                    id: ++idQuestion,
                    type: action.data,
                    isReady: false,
                    question:`Новый вопрос ${idQuestion} Вопрос?`,
                    answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
                }
            ]});
        }
        case "DELETE_QUESTION":{
            return Object.assign({}, state, {
                questions: state.questions.filter(element => element.id !== action.data)});
        }
        case "CHANGE_QUESTION":{
            return Object.assign({}, state, {
                questions: state.questions.map(element => {if(element.id==action.data) {element.isReady=(!element.isReady)}; return element})
            })
        }
    }
    return state;
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/" component={Main}/>
            </Switch> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'));