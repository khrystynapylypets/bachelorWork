import {
    GET_ALL_SUBJECTS_SUCCESS,
    GET_ALL_SUBJECTS_FAIL
  } from '../actions/constants'
  
  const initState = {
    error: '',
  }
  
  export const subjectReducer = (prevState = initState, action) => {
    switch(action.type) {
      case GET_ALL_SUBJECTS_SUCCESS:
        return {
          ...prevState,
          subjects: action.subjects
        }
      case GET_ALL_SUBJECTS_FAIL:
        return {
          ...prevState,
          error: action.error,
        }
      default:
        return prevState
    }
  }
  