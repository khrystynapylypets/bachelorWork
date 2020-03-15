import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/constants'

const initState = {
  error: '',
}

export const userReducer = (prevState = initState, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
          ...prevState,
        error: '',
      }
    case REGISTER_FAIL:
      return {
          ...prevState,
        error: action.error,
      }
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        error: '',
      }
    case LOGIN_FAIL:
      return {
        ...prevState,
        error: action.error,
      }
    default:
      return prevState
  }
}
