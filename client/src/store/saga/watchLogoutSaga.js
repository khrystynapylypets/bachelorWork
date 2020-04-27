import { takeEvery, put } from 'redux-saga/effects'
import { LOGOUT } from '../actions/constants'
import { logoutSuccess } from '../actions';
import { deleteInitData } from '../../helpers/storageFunctions'
import history from '../../history'

function* workLogoutUser() {
  deleteInitData()
  yield put(logoutSuccess())

  history.push('/login')
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT, workLogoutUser)
}