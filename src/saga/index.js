import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects';
import {initCategories,initTest,initQuestions,initUsers,initStatistics,initUser,initAnswers} from '../actions'
import axios from "axios";

let ff=(idCategory,idTest)=>{
    let url='/api/test'+(idCategory?`/${idCategory}`:"")+(idTest?`/${idTest}`:"");
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
}
let apiUsers=(idUser)=>{
    let url='/api/user'+(idUser?`/${idUser}`:"");
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
}
let apiStatistics=(idUser)=>{
    let url='/api/statistics/'+idUser;
    return axios.get(url)
    .then(res=>{
        return res.data;
    })
}
let apiAnswers=(params, id)=>{
    let url='/api/result?'+`${params}=${id}`;
    return axios.get(url)
        .then(res=>{
            console.log(res.data);
            return res.data;
        })
}

export function* categories() {
    const data=yield call(ff);
    yield put(initCategories(data))
}
export function* tests(action){
    const data=yield call(ff,action.idCategory);
    yield put(initTest(data))
}
export function* questions(action){
    const data=yield call(ff,action.idCategory,action.idTest);
    yield put(initQuestions(data))
}
export function* users(){
    const data=yield call(apiUsers);
    yield put(initUsers(data))
}
export function* user(action){
    const data=yield call(apiUsers,action.idUser);
    yield put(initUser(data))
}
export function* userStatistics(action){
    const data=yield call(apiStatistics,action.idUser);
    yield put(initStatistics(data))
}
export function* answers(action){
    const data=yield call(apiAnswers,action.param, action.id);
    yield put(initAnswers(data))
}
export default function* rootSaga() {
    yield takeEvery('GET_CATEGORIES', categories),
    yield takeEvery('GET_TESTS', tests),
    yield takeEvery('GET_QUESTIONS', questions)
    yield takeEvery('GET_USERS', users),
    yield takeEvery('GET_USER', user),
    yield takeEvery('GET_STATISTICS', userStatistics)
    yield takeEvery('GET_ANSWERS', answers)
}