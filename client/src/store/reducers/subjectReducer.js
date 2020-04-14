import {
    GET_ALL_SUBJECTS_SUCCESS,
    GET_ALL_SUBJECTS_FAIL,
    GET_GENERAL_SUBJECTS_SUCCESS,
    GET_GENERAL_SUBJECTS_FAIL,
    GET_SPECIALITY_SUBJECTS_SUCCESS,
    GET_SPECIALITY_SUBJECTS_FAIL,
    GET_SELECTIVE_SUBJECTS_SUCCESS,
    GET_SELECTIVE_SUBJECTS_FAIL
  } from '../actions/constants'
  
  const initState = {
    error: '',
  }
  
  export const subjectReducer = (prevState = initState, action) => {
    switch(action.type) {
      //all
      case GET_ALL_SUBJECTS_SUCCESS:
        return {
          ...prevState,
          subjects: action.data
        }
      case GET_ALL_SUBJECTS_FAIL:
        return {
          ...prevState,
          error: action.error,
        }
      //general
      case GET_GENERAL_SUBJECTS_SUCCESS:
        return {
          ...prevState,
          generalSubjects: action.data
        }
      case GET_GENERAL_SUBJECTS_FAIL:
        return {
          ...prevState,
          error: action.error,
        }
      //speciality
      case GET_SPECIALITY_SUBJECTS_SUCCESS:
        return {
          ...prevState,
          specialitySubjects: action.data
        }
      case GET_SPECIALITY_SUBJECTS_FAIL:
        return {
          ...prevState,
          error: action.error,
        }
      //selective
      case GET_SELECTIVE_SUBJECTS_SUCCESS:
        return {
          ...prevState,
          selectiveSubjects: action.data
        }
      case GET_SELECTIVE_SUBJECTS_FAIL:
        return {
          ...prevState,
          error: action.error,
        }
      default:
        return prevState
    }
  }
  