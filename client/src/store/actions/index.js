import {
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  GET_ALL_SUBJECTS,
  GET_ALL_SUBJECTS_FAIL,
  GET_ALL_SUBJECTS_SUCCESS,
  GET_GENERAL_SUBJECTS,
  GET_GENERAL_SUBJECTS_FAIL,
  GET_GENERAL_SUBJECTS_SUCCESS,
  GET_SPECIALITY_SUBJECTS,
  GET_SPECIALITY_SUBJECTS_FAIL,
  GET_SPECIALITY_SUBJECTS_SUCCESS,
  GET_SELECTIVE_SUBJECTS,
  GET_SELECTIVE_SUBJECTS_FAIL,
  GET_SELECTIVE_SUBJECTS_SUCCESS,
  CREATE_EMPTY_SCHEDULE,
  ADD_SUBJECT,
  ADD_COEFFICIENT,
  DELETE_SUBJECT
} from './constants'

export const registerUser = (user) => ({
  type: REGISTER,
  user,
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
})

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  error,
})

export const loginUser = (user) => ({
  type: LOGIN,
  user,
})

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
})

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  error,
})

export const logoutUser = () => ({
  type: LOGOUT,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const resetPassword = (email) => ({
  type: RESET_PASSWORD,
  email,
})

export const resetPasswordSuccess = (data) => ({
  type: RESET_PASSWORD_SUCCESS,
  data,
})

export const resetPasswordFail = (error) => ({
  type: RESET_PASSWORD_FAIL,
  error,
})

//ALL
export const getAllSubjects = () => ({
  type: GET_ALL_SUBJECTS,
})

export const getAllSubjectsSuccess = (data) => ({
  type: GET_ALL_SUBJECTS_SUCCESS,
  data
})

export const getAllSubjectsFail = (error) => ({
  type: GET_ALL_SUBJECTS_FAIL,
  error
})

//GENERAL
export const getGeneralSubjects = () => ({
  type: GET_GENERAL_SUBJECTS,
})

export const getGeneralSubjectsSuccess = (data) => ({
  type: GET_GENERAL_SUBJECTS_SUCCESS,
  data
})

export const getGeneralSubjectsFail = (error) => ({
  type: GET_GENERAL_SUBJECTS_FAIL,
  error
})

//SPECIALITY
export const getSpecialitySubjects = () => ({
  type: GET_SPECIALITY_SUBJECTS,
})

export const getSpecialitySubjectsSuccess = (data) => ({
  type: GET_SPECIALITY_SUBJECTS_SUCCESS,
  data
})

export const getSpecialitySubjectsFail = (error) => ({
  type: GET_SPECIALITY_SUBJECTS_FAIL,
  error
})

//SELECTIVE
export const getSelectiveSubjects = () => ({
  type: GET_SELECTIVE_SUBJECTS,
})

export const getSelectiveSubjectsSuccess = (data) => ({
  type: GET_SELECTIVE_SUBJECTS_SUCCESS,
  data
})

export const getSelectiveSubjectsFail = (error) => ({
  type: GET_SELECTIVE_SUBJECTS_FAIL,
  error
})

export const createEmptySchedule = (numberOfSemesters) => ({
  type: CREATE_EMPTY_SCHEDULE,
  numberOfSemesters
})

export const addSubject = (numberOfSemester, subject) => ({
  type: ADD_SUBJECT,
  numberOfSemester,
  subject
})

export const addCoefficient = (idOfSubject, coefficient) => ({
  type: ADD_COEFFICIENT,
  idOfSubject,
  coefficient
})

export const deleteSubject = (idOfSubject, typeOfSubject, numberOfSemester) => ({
  type: DELETE_SUBJECT,
  idOfSubject,
  typeOfSubject,
  numberOfSemester
})

