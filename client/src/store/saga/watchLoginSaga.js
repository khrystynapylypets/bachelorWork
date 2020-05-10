import {takeEvery, call, put} from 'redux-saga/effects'
import {LOGIN} from '../actions/constants'
import {loginSuccess, loginFail, initUser} from '../actions/userAction'
import {API} from '../api'
import {setInitData} from '../../helpers/storageFunctions'
import history from '../../history';

function* workLoginUser({user}) {
    try {
        let {headers, data} = yield call(loginUser, user)
        setInitData(headers[ 'access-token' ], data.user)

        yield put(loginSuccess())
        yield put(initUser(data.user))

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