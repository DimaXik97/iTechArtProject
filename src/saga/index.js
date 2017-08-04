import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects';
import axios from "axios";
let ff=()=>{
     return axios.get('/api/test')
        .then(res=>{
            return res.data;
        })
}
let fff=(id)=>{
    return axios.get('/api/test/'+id)
    .then(res=>{
        console.log(res);
        return res.data;
    })
}
export function* initCategories() {
    const data=yield call(ff);
    yield put({type: 'INIT_CATEGORIES', categories:data})
}
export function* initTests(action){
    const data=yield call(fff,action.id);
    yield put({type: 'INIT_TESTS', tests:data})
}

export default function* rootSaga() {
    yield takeEvery('GET_CATEGORIES', initCategories),
    yield takeEvery('GET_TESTS', initTests)
}