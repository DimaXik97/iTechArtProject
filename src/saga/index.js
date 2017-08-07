import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects';
import {initCategories,initTest,initQuestions,initUsers,initResult,initStatistics,initUser,initAnswers,initVacancies,initNews} from '../actions'
import axios from "axios";

let getData=(url)=>{
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
}

export function* categories() {
    let url='/api/test';
    const data=yield call(getData, url);
    yield put(initCategories(data))
}
export function* tests(action){
    let url='/api/test/'+action.idCategory;
    const data=yield call(getData, url);
    yield put(initTest(data))
}
export function* questions(action){
    let url='/api/test/'+action.idCategory+'/'+action.idTest;
    const data=yield call(getData, url);
    yield put(initQuestions(data))
}
export function* users(){
    let url='/api/user';
    const data=yield call(getData, url);
    yield put(initUsers(data))
}
export function* user(action){
    let url='/api/user'+(action.idUser);
    const data=yield call(getData, url);
    yield put(initUser(data))
}
export function* userStatistics(action){
     let url='/api/statistics/'+action.idUser;
    const data=yield call(getData, url);
    yield put(initStatistics(data))
}
export function* answers(action){
    let url='/api/result?'+`${action.param}=${action.id}`;
    const data=yield call(getData, url);
    yield put(initAnswers(data))
}
export function* news(action){
    let url='/api/news';
    const data=yield call(getData, url);
    yield put(initNews(data))
}
export function* vacancies(action){
    let url='/api/vacancies';
    const data=yield call(getData, url);
    yield put(initVacancies(data))
}

export function* result(action){
    let url='/api/result/'+action.id;
    const data=yield call(getData, url);
    yield put(initResult(data))
}

export default function* rootSaga() {
    yield takeEvery('GET_CATEGORIES', categories),
    yield takeEvery('GET_TESTS', tests),
    yield takeEvery('GET_QUESTIONS', questions)
    yield takeEvery('GET_USERS', users),
    yield takeEvery('GET_USER', user),
    yield takeEvery('GET_STATISTICS', userStatistics)
    yield takeEvery('GET_ANSWERS', answers)
    yield takeEvery('GET_NEWS', news)
    yield takeEvery('GET_VACANCIES', vacancies)
    yield takeEvery('GET_RESULT', result)
}