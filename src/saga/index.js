import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects'

export function* incrementAsync() {
  yield put({type: 'INIT_CATEGORIES', categories:[]})
}

export default function* rootSaga() {
  yield takeEvery('GET_CATEGORIES', incrementAsync)
}