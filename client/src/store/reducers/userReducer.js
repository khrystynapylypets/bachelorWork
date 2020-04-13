import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  GET_USER_DATA_LOADING,
  GET_USER_DATA_FAIL,
  GET_USER_DATA_SUCCESS,
} from '../actions/constants'

import _ from 'lodash'

const initState = {
  error: '',
  loading: true,
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
    case GET_USER_DATA_LOADING:
      return {
          ...prevState,
        loading: true,
        error: '',
      }
    case GET_USER_DATA_SUCCESS:
      return {
          ...prevState,
        userData: _.cloneDeep(action.userData),
        loading: false,
      }
    case GET_USER_DATA_FAIL:
      return {
          ...prevState,
        loading: false,
        error: action.error,
      }
    default:
      return prevState
  }
}
