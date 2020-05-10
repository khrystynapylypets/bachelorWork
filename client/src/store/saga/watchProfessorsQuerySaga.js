import { takeEvery, call, put } from 'redux-saga/effects'
import { QUERY_PROFESSORS } from '../actions/constants'
import { queryProfessorsSuccess, queryProfessorsFail, queryProfessorsLoading } from '../actions/professorsAction'
import { AuthAPI } from '../api'

function* workQueryProfessors() {
    try {
        yield put(queryProfessorsLoading())
        let response = yield call(getProfessors)
        console.log(response);
        yield put(queryProfessorsSuccess(response.data.users, response.data.users.length))

    } catch (e) {
        let errorMessage = e.response ? e.response.data.message : e.message
        console.log(e)
        yield put(queryProfessorsFail(errorMessage))
    }
}

export function* watchQueryProfessors() {
    yield takeEvery(QUERY_PROFESSORS, workQueryProfessors)
}

const getProfessors = () => {
    return AuthAPI.get(`/users`)
}