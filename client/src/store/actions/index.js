import {
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
} from './constants'

export const registerUser = (user) => ({
  type: REGISTER,
  user,
})

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  user,
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

export const logoutUser = (data) => ({
  type: LOGOUT,
  data,
})

export const logoutSuccess = (data) => ({
  type: LOGOUT_SUCCESS,
  data,
})

export const logoutFail = (error) => ({
  type: LOGOUT_FAIL,
  error,
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

