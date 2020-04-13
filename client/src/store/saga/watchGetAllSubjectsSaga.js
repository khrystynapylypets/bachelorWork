import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ALL_SUBJECTS } from '../actions/constants'
import { getAllSubjectsFail, getAllSubjectsSuccess } from '../actions'
import { API } from '../api'

//All
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

const GetAllSubjects = () => {
  return API.get('/subjects')
}













// //General
// function* workGetGeneralSubjects() {
//   try {
//     let response = yield call(GetGeneralSubjects)

//     yield put(getGeneralSubjectsSuccess({
//       subjects: response.data.subjects.subjects
//     }))

//   } catch (e) {
//     let errorMessage = e.response ? e.response.data.message : e.message
//     yield put(getGeneralSubjectsFail(errorMessage))
//   }
// }

// export function* watchGetAllSubjects() {
//   yield takeEvery(GET_ALL_SUBJECTS, workGetGeneralSubjects)
// }

// const GetGeneralSubjects = () => {
//   return API.get('/subjects', {params: {type: general}})
// }

// //Speciality
// function* workGetSpecialitySubjects() {
//   try {
//     let response = yield call(GetSpecialitySubjects)

//     yield put(getAllSubjectsSuccess({
//       subjects: response.data.subjects.subjects
//     }))

//   } catch (e) {
//     let errorMessage = e.response ? e.response.data.message : e.message
//     yield put(getAllSubjectsFail(errorMessage))
//   }
// }

// export function* watchGetAllSubjects() {
//   yield takeEvery(GET_ALL_SUBJECTS, workGetSpecialitySubjects)
// }

// const GetSpecialitySubjects = () => {
//   return API.get('/subjects', {params: {type: speciality}})
// }

// //Selective
// function* workGetSelectiveSubjects() {
//   try {
//     let response = yield call(GetSelectiveSubjects)

//     yield put(getAllSubjectsSuccess({
//       subjects: response.data.subjects.subjects
//     }))

//   } catch (e) {
//     let errorMessage = e.response ? e.response.data.message : e.message
//     yield put(getAllSubjectsFail(errorMessage))
//   }
// }

// export function* watchGetAllSubjects() {
//   yield takeEvery(GET_ALL_SUBJECTS, workGetSelectiveSubjects)
// }

// const GetSelectiveSubjects = () => {
//   return API.get('/subjects', {params: {type: selective}})
// }