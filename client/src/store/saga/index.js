import { all } from 'redux-saga/effects';
import { watchRegisterUser } from './watchRegisterSaga';
import { watchLogoutUser } from './watchLogoutSaga';
import { watchLoginUser } from './watchLoginSaga';
import { watchGetUserData } from './watchUserSaga';
import { watchQueryProfessors } from './watchProfessorsSaga';
import { watchCreateEvent, watchQueryEvents } from './watchEventSaga';

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLogoutUser(),
    watchLoginUser(),
    watchGetUserData(),
    watchQueryProfessors(),
    watchCreateEvent(),
    watchQueryEvents(),
  ]);
}
