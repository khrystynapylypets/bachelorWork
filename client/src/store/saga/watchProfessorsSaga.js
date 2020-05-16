import { takeEvery, call, put } from 'redux-saga/effects';
import { professorsActions } from '../actions/professorsActions';
import { AuthAPI } from '../api';

function* workQueryProfessors() {
  try {
    yield put(professorsActions.queryProfessorsLoading());
    let response = yield call(getProfessors);

    console.log(response);
    yield put(professorsActions.queryProfessorsSuccess(response.data.users, response.data.users.length));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    console.log(e);
    yield put(professorsActions.queryProfessorsFail(errorMessage));
  }
}

export function* watchQueryProfessors() {
  yield takeEvery(professorsActions.types.QUERY_PROFESSORS, workQueryProfessors);
}

const getProfessors = () => {
  return AuthAPI.get(`/users`);
};
