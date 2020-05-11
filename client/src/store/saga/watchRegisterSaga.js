import { takeEvery, call, put } from 'redux-saga/effects';
import { userActions } from '../actions/userActions';
import { API } from '../api';
import { setInitData } from '../../helpers/storageFunctions';
import history from '../../history';

function* workRegisterUser({ user }) {
  try {
    let { headers, data } = yield call(registerUser, user);

    setInitData(headers['access-token'], data.user);

    yield put(userActions.registerSuccess());
    yield put(userActions.initUser(data.user));

    history.push('/home');
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(userActions.registerFail(errorMessage));
  }
}

export function* watchRegisterUser() {
  yield takeEvery(userActions.types.REGISTER, workRegisterUser);
}

const registerUser = (userData) => {
  return API.post('/users/register', userData);
};
