import { takeEvery } from 'redux-saga/effects'
import { LOGOUT } from '../actions/constants'
import { deleteToken } from '../../helpers/token'
import history from '../../history'

function* workLogoutUser() {
  deleteToken()
  history.push('/login')
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT, workLogoutUser)
}