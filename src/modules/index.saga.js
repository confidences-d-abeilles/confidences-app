import { takeEvery, all } from 'redux-saga/effects';

function* testSaga() {
  console.log('Hello Sagas!');
}

function* testSaga2() {
  yield takeEvery('HOME_FETCH_START', testSaga);
}

export default function* rootSaga() {
  yield all(
    testSaga2,
  );
}
