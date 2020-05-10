import { takeEvery, call, put } from 'redux-saga/effects';
import { userActions } from '../actions/userActions';
import { API } from '../api';
import { setInitData } from '../../helpers/storageFunctions';
import history from '../../history';

function* workLoginUser({ user }) {
  try {
    let { headers, data } = yield call(loginUser, user);

    setInitData(headers['access-token'], data.user);

    yield put(userActions.loginSuccess());
    yield put(userActions.initUser(data.user));

    history.push('/home');
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(userActions.loginFail(errorMessage));
  }
}

export function* watchLoginUser() {
  yield takeEvery(userActions.types.LOGIN, workLoginUser);
}

const loginUser = (userData) => {
  return API.post('/users/login', userData);
};
