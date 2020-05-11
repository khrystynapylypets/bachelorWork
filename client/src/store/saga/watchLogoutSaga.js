import { takeEvery, put } from 'redux-saga/effects';
import { userActions } from '../actions/userActions';
import { deleteInitData } from '../../helpers/storageFunctions';
import history from '../../history';

function* workLogoutUser() {
  deleteInitData();
  yield put(userActions.logoutSuccess());

  history.push('/login');
}

export function* watchLogoutUser() {
  yield takeEvery(userActions.types.LOGOUT, workLogoutUser);
}
