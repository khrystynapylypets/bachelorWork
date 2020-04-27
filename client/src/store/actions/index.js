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
    GET_USER_DATA_LOADING,
    GET_USER_DATA_FAIL,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA,
    INIT,
    INIT_FAIL,
    INIT_SUCCESS,
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

export const getUserData = (userId) => ({
    type: GET_USER_DATA,
    userId,
})

export const getUserDataLoading = () => ({
    type: GET_USER_DATA_LOADING,
})

export const getUserDataSuccess = (userData) => ({
    type: GET_USER_DATA_SUCCESS,
    userData,
})

export const getUserDataFail = (error) => ({
    type: GET_USER_DATA_FAIL,
    error,
})

export const initUser = (userData) => ({
    type: INIT,
    userData,
})

