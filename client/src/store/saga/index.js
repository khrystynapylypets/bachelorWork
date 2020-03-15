import { all } from 'redux-saga/effects'
import { watchRegisterUser } from './watchRegisterSaga'
import { watchLogoutUser } from './watchLogoutSaga'

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLogoutUser(),
  ])
}
