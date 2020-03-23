import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from '../actions/constants'

const initState = {
  error: '',
}

export const userReducer = (prevState = initState, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
          ...prevState,
        isAdmin: false,
        id: action.data.id,
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
        id: action.data.id,
        isAdmin: action.data.isAdmin,
        error: '',
      }
    case LOGIN_FAIL:
      return {
        ...prevState,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return {
          ...initState
      }
    default:
      return prevState
  }
}
