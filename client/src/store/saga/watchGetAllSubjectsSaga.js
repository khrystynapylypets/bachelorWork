import { takeEvery, call, put } from 'redux-saga/effects';
import { subjectsActions } from '../actions/subjectsActions';
import { API } from '../api';

const GetAllSubjects = () => {
  return API.get('/subjects');
};

//All
function* workGetAllSubjects() {
  try {
    let response = yield call(GetAllSubjects);

    console.log(response);
    yield put(subjectsActions.getAllSubjectsSuccess({
      subjects: response.data.subjects,
    }));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(subjectsActions.getAllSubjectsFail(errorMessage));
  }
}

export function* watchGetAllSubjects() {
  yield takeEvery(subjectsActions.types.GET_ALL_SUBJECTS, workGetAllSubjects);
}

//General
function* workGetGeneralSubjects() {
  try {
    let response = yield call(GetAllSubjects);

    console.log(response);
    const generalItems = [];
    
    response.data.subjects.map((subject) => {
      if (subject.type === 'general') {
        generalItems.push(subject);
      }
    });
    console.log(generalItems);
    yield put(subjectsActions.getGeneralSubjectsSuccess({
      subjects: generalItems.slice(),
    }));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(subjectsActions.getGeneralSubjectsFail(errorMessage));
  }
}

export function* watchGetGeneralSubjects() {
  yield takeEvery(subjectsActions.types.GET_GENERAL_SUBJECTS, workGetGeneralSubjects);
}

//Speciality
function* workGetSpecialitySubjects() {
  try {
    let response = yield call(GetAllSubjects);

    console.log(response);
    const generalItems = [];
    
    response.data.subjects.map((subject) => {
      if (subject.type === 'speciality') {
        generalItems.push(subject);
      }
    });
    console.log(generalItems);
    yield put(subjectsActions.getSpecialitySubjectsSuccess({
      subjects: generalItems.slice(),
    }));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(subjectsActions.getSpecialitySubjectsFail(errorMessage));
  }
}

export function* watchGetSpecialitySubjects() {
  yield takeEvery(subjectsActions.types.GET_SPECIALITY_SUBJECTS, workGetSpecialitySubjects);
}

//Selective
function* workGetSelectiveSubjects() {
  try {
    let response = yield call(GetAllSubjects);

    console.log(response);
    const generalItems = [];
    
    response.data.subjects.map((subject) => {
      if (subject.type === 'selective') {
        generalItems.push(subject);
      }
    });
    console.log(generalItems);
    yield put(subjectsActions.getSelectiveSubjectsSuccess({
      subjects: generalItems.slice(),
    }));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(subjectsActions.getSelectiveSubjectsFail(errorMessage));
  }
}

export function* watchGetSelectiveSubjects() {
  yield takeEvery(subjectsActions.types.GET_SELECTIVE_SUBJECTS, workGetSelectiveSubjects);
}
