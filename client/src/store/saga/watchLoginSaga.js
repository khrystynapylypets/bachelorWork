import { takeEvery, call, put } from 'redux-saga/effects'
import { LOGIN } from '../actions/constants'
import { loginSuccess, loginFail } from '../actions'
import { API } from '../api'
import { setToken } from '../../helpers/token'
import history from '../../history';

function* workLoginUser({ user }) {
  try {
    let response = yield call(loginUser, user)
    setToken(response.headers[ 'access-token' ])
    yield put(loginSuccess(response.data.user.id))

    history.push('/home')

  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(loginFail(errorMessage))
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN, workLoginUser)
}

const loginUser = (userData) => {
  return API.post('/users/login', userData)
}