import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTER } from '../actions/constants'
import { registerSuccess, registerFail } from '../actions'
import { API } from '../api'
import { setToken } from '../../helpers/token'
import { reset } from 'redux-form'

function* workRegisterUser({ user }) {
  try {
    let response = yield call(registerUser, user)
    setToken(response.headers[ 'access-token' ])

    yield put(registerSuccess(response.data.user.id))

  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(registerFail(errorMessage))
  }
}

export default function* watchRegisterUser() {
  yield takeEvery(REGISTER, workRegisterUser)
}

const registerUser = (userData) => {
  return API.post('/users/register', userData)
}