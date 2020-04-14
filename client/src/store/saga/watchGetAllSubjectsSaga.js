import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ALL_SUBJECTS, GET_GENERAL_SUBJECTS, GET_SPECIALITY_SUBJECTS, GET_SELECTIVE_SUBJECTS } from '../actions/constants'
import {
  getAllSubjectsFail, getAllSubjectsSuccess, getGeneralSubjectsFail, getGeneralSubjectsSuccess,
  getSpecialitySubjectsFail, getSpecialitySubjectsSuccess, getSelectiveSubjectsFail, getSelectiveSubjectsSuccess
} from '../actions'
import { API } from '../api'

const GetAllSubjects = () => {
  return API.get('/subjects')
}

//Al
function* workGetAllSubjects() {
  try {
    let response = yield call(GetAllSubjects)
    console.log(response)
    yield put(getAllSubjectsSuccess({
      subjects: response.data.subjects
    }))


  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(getAllSubjectsFail(errorMessage))
  }
}

export function* watchGetAllSubjects() {
  yield takeEvery(GET_ALL_SUBJECTS, workGetAllSubjects)
}

//General
function* workGetGeneralSubjects() {
  try {
    let response = yield call(GetAllSubjects)
    console.log(response)
    const generalItems = []
    
    response.data.subjects.map((subject) => {
      if (subject.type === 'general') {
        generalItems.push(subject)
      }
    })
    console.log(generalItems)
    yield put(getGeneralSubjectsSuccess({
      subjects: generalItems.slice()
    }))

  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(getGeneralSubjectsFail(errorMessage))
  }
}

export function* watchGetGeneralSubjects() {
  yield takeEvery(GET_GENERAL_SUBJECTS, workGetGeneralSubjects)
}

//Speciality
function* workGetSpecialitySubjects() {
  try {
    let response = yield call(GetAllSubjects)
    console.log(response)
    const generalItems = []
    
    response.data.subjects.map((subject) => {
      if (subject.type === 'speciality') {
        generalItems.push(subject)
      }
    })
    console.log(generalItems)
    yield put(getSpecialitySubjectsSuccess({
      subjects: generalItems.slice()
    }))

  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(getSpecialitySubjectsFail(errorMessage))
  }
}

export function* watchGetSpecialitySubjects() {
  yield takeEvery(GET_SPECIALITY_SUBJECTS, workGetSpecialitySubjects)
}

//Selective
function* workGetSelectiveSubjects() {
  try {
    let response = yield call(GetAllSubjects)
    console.log(response)
    const generalItems = []
    
    response.data.subjects.map((subject) => {
      if (subject.type === 'selective') {
        generalItems.push(subject)
      }
    })
    console.log(generalItems)
    yield put(getSelectiveSubjectsSuccess({
      subjects: generalItems.slice()
    }))

  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message
    yield put(getSelectiveSubjectsFail(errorMessage))
  }
}

export function* watchGetSelectiveSubjects() {
  yield takeEvery(GET_SELECTIVE_SUBJECTS, workGetSelectiveSubjects)
}