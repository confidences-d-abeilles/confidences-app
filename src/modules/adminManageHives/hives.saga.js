import {
  put, takeLatest, all,
} from 'redux-saga/effects';
import request from '../../services/Net';
import {
  HIVES_FETCH,
  HIVES_FETCH_SUCCESS,
  HIVES_FETCH_FAIL, HIVES_ADD_FAIL, HIVES_ADD_SUCCESS, HIVES_ADD,
} from './hives.actions';


function* hivesFetch({ needle }) {
  try {
    const data = yield request({
      url: `/hive/bundle/owner${needle ? `/${needle}` : ''}`,
      method: 'GET',
    });
    yield put({ type: HIVES_FETCH_SUCCESS, data });
  } catch (e) {
    yield put({ type: HIVES_FETCH_FAIL });
  }
}

function* addHive({ name }) {
  try {
    yield request({
      url: '/hive',
      method: 'post',
      data: {
        name,
      },
    });
    yield put({ type: HIVES_ADD_SUCCESS });
  } catch (e) {
    yield put({ type: HIVES_ADD_FAIL });
  }
}

function* listen() {
  yield takeLatest(HIVES_FETCH, hivesFetch);
  yield takeLatest(HIVES_ADD, addHive);
  yield takeLatest(HIVES_ADD_SUCCESS, hivesFetch);
}

export default function* rootSaga() {
  yield all([
    listen(),
  ]);
}
