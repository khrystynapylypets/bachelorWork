import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_USER_DATA } from '../actions/constants'
import { getUserDataSuccess, getUserDataFail, getUserDataLoading } from '../actions'
import { AuthAPI } from '../api'

function* workGetUserData({ userId }) {
  try {
    yield put(getUserDataLoading())
    let response = yield call(getUser, userId)
    yield put(getUserDataSuccess(response.data.user))

  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(getUserDataFail(errorMessage))
  }
}

export function* watchGetUserData() {
  yield takeEvery(GET_USER_DATA, workGetUserData)
}

const getUser = (userId) => {
  return AuthAPI.get(`/users/${userId}`)
}