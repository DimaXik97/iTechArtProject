import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects';
import {initCategories,initTest,initQuestions} from '../actions'
import axios from "axios";

let ff=(idCategory,idTest)=>{
    let url='/api/test'+(idCategory?`/${idCategory}`:"")+(idTest?`/${idTest}`:"");
    return axios.get(url)
    .then(res=>{
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

export default function* rootSaga() {
    yield takeEvery('GET_CATEGORIES', categories),
    yield takeEvery('GET_TESTS', tests),
    yield takeEvery('GET_QUESTIONS', questions)
}