import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
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
    default:
      return prevState
  }
}
