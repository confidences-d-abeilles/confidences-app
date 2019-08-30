import { put, takeLatest, all, select } from 'redux-saga/effects';
import request from '../../services/Net';
import {
  HIVES_FETCH,
  HIVES_FETCH_SUCCESS,
  HIVES_FETCH_FAIL,
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

function* listen() {
  yield takeLatest(HIVES_FETCH, hivesFetch);
}

export default function* rootSaga() {
  yield all([
    listen(),
  ]);
}
