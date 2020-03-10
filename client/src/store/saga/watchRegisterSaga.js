import {takeEvery, call, put} from 'redux-saga/effects';
import { REGISTER } from '../actions/constants'
import { registerSuccess, registerFail } from '../actions';
import { API } from '../api'
import history from '../../history'

function* workRegisterUser(action) {
  try {
    let response = yield call(registerUser, action.user)
    localStorage.setItem('token', response.cookie('token'))

    yield put(registerSuccess(response.data))
    history.push('/home');
  }
  catch (e) {
    yield put(registerFail(e.response.data.message))
  }
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER, workRegisterUser)
}

const registerUser = async(userData) => {
  return API.post('/user/register', userData)
}