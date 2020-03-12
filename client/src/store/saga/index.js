import { all } from 'redux-saga/effects'
import watchRegisterUser from './watchRegisterSaga'

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
  ])
}
