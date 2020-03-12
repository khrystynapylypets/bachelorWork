import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTER } from '../actions/constants'
import { registerSuccess, registerFail } from '../actions'
import { API } from '../api'
import history from '../../history'
import { setToken } from '../../helpers/token'
import { reset } from 'redux-form'

function* workRegisterUser({ user }) {
  try {
    let response = yield call(registerUser, user)
    console.log(response.headers)
    setToken(response.headers[ 'access-token' ])

    yield put(registerSuccess(response.data.user))
    //history.push('/home')

  } catch (e) {
    console.log(e)
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(registerFail(errorMessage))
    yield put(reset())
  }
}

export default function* watchRegisterUser() {
  yield takeEvery(REGISTER, workRegisterUser)
}

const registerUser = (userData) => {
  return API.post('/users/register', userData)
}