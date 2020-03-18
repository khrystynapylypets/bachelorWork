import { takeEvery, put } from 'redux-saga/effects'
import { LOGOUT } from '../actions/constants'
import { logoutSuccess } from '../actions';
import { deleteToken } from '../../helpers/token'
import history from '../../history'

function* workLogoutUser() {
  deleteToken()
  yield put(logoutSuccess())

  history.push('/login')
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT, workLogoutUser)
}