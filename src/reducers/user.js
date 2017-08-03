const initState={
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
    ]
};
const user = (state = initState, action) => {
    return state;
}

export default user;