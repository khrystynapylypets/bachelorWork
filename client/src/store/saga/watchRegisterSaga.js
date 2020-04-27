import {takeEvery, call, put} from 'redux-saga/effects'
import {REGISTER} from '../actions/constants'
import {registerSuccess, registerFail, initUser} from '../actions'
import {API} from '../api'
import {setInitData} from '../../helpers/storageFunctions'
import history from '../../history';

function* workRegisterUser({user}) {
    try {
        let {headers, data} = yield call(registerUser, user)
        setInitData(headers['access-token'], data.user)

        yield put(registerSuccess())
        yield put(initUser(data.user))

        history.push('/home')

    } catch (e) {
        let errorMessage = e.response ? e.response.data.message : e.message
        yield put(registerFail(errorMessage))
    }
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER, workRegisterUser)
}

const registerUser = (userData) => {
    return API.post('/users/register', userData)
}