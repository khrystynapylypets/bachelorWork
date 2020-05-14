import { all } from 'redux-saga/effects';
import { watchRegisterUser } from './watchRegisterSaga';
import { watchLogoutUser } from './watchLogoutSaga';
import { watchLoginUser } from './watchLoginSaga';
import { watchGetAllSubjects, watchGetGeneralSubjects, watchGetSpecialitySubjects, watchGetSelectiveSubjects } from './watchGetAllSubjectsSaga';
import { watchGetUserData } from './watchUserSaga';

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLogoutUser(),
    watchLoginUser(),
    watchGetAllSubjects(),
    watchGetGeneralSubjects(),
    watchGetSpecialitySubjects(),
    watchGetSelectiveSubjects(),
    watchGetUserData(),
  ]);
}
