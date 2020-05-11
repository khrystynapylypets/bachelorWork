import { takeEvery, call, put } from 'redux-saga/effects';
import { userActions } from '../actions/userActions';
import { AuthAPI } from '../api';

function* workGetUserData({ userId }) {
  try {
    yield put(userActions.getUserDataLoading());
    let response = yield call(getUser, userId);

    yield put(userActions.getUserDataSuccess(response.data.user));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(userActions.getUserDataFail(errorMessage));
  }
}

export function* watchGetUserData() {
  yield takeEvery(userActions.types.GET_USER_DATA, workGetUserData);
}

const getUser = (userId) => {
  return AuthAPI.get(`/users/${userId}`);
};
