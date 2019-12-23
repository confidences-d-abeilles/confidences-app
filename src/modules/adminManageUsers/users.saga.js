import {
  put, takeLatest, all,
} from 'redux-saga/effects';
import request from '../../services/Net';
import {
  USERS_FETCH,
  USERS_FETCH_FAIL,
  USERS_FETCH_SUCCESS,
} from './users.actions';


function* usersFetch() {
  try {
    const data = yield request({
      url: '/user',
      method: 'GET',
    });
    yield put({ type: USERS_FETCH_SUCCESS, data });
  } catch (e) {
    yield put({ type: USERS_FETCH_FAIL });
  }
}

function* listen() {
  yield takeLatest(USERS_FETCH, usersFetch);
}

export default function* rootSaga() {
  yield all([
    listen(),
  ]);
}
