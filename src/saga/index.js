import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects';
import axios from "axios";
let ff=()=>{
     return axios.get('/api/test')
        .then(res=>{
            return res.data;
        })
}
export function* incrementAsync() {
    const data=yield call(ff);
    yield put({type: 'INIT_CATEGORIES', categories:data})
}

export default function* rootSaga() {
    yield takeEvery('GET_CATEGORIES', incrementAsync)
}