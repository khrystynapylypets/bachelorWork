import { all } from 'redux-saga/effects'
import { watchRegisterUser } from './watchRegisterSaga'
import { watchLogoutUser } from './watchLogoutSaga'
import { watchLoginUser } from './watchLoginSaga'
import { watchGetUserData } from './watchGetUserDataSaga'

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLogoutUser(),
    watchLoginUser(),
    watchGetUserData(),
  ])
}
