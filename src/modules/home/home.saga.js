import { takeEvery, put, all } from 'redux-saga/effects';
import request from '../../services/Net';
import { HOME_FETCH_FAIL, HOME_FETCH_SUCCESS } from './home.actions';

function* fetchHome() {
  try {
    const data = yield request({
      url: '/user/public',
      method: 'GET',
    });
    yield put({ type: HOME_FETCH_SUCCESS, payload: data });
  } catch (e) {
    console.error(e);
    yield put({ type: HOME_FETCH_FAIL });
  }
}

function* listen() {
  yield takeEvery('HOME_FETCH_START', fetchHome);
}

export default function* rootSaga() {
  yield all([
    listen(),
  ]);
}
