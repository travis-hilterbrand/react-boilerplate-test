import { put } from 'redux-saga/effects';
import { actions } from './slice';

export function* listUsersSaga() {
  yield put(actions.setTest({ test: 'from startup saga' }));
}
