import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    GET_USER_DATA_LOADING,
    GET_USER_DATA_FAIL,
    GET_USER_DATA_SUCCESS,
    INIT,
} from '../actions/constants'


const initState = {
    id: null,
    email: '',
    firstName: '',
    secondName: '',
    lastName: '',
    dateWork: '',
    academicStatus: '',
    dateBirth: '',
    isAdmin: false,
    phoneNumber: '',
    error: '',
    loading: true,
}

export const userReducer = (prevState = initState, action) => {
    switch (action.type) {
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
                loading: false,
                error: '',
            }
        case LOGIN_FAIL:
            return {
                ...prevState,
                error: action.error,
            }
        case INIT:
            return {
                ...prevState,
                id: action.userData.id,
                isAdmin: action.userData.isAdmin,
                loading: false,
                error: '',
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
                id: action.userData.id,
                email: action.userData.email,
                firstName: action.userData.firstName,
                secondName: action.userData.secondName,
                lastName: action.userData.lastName,
                dateWork: action.userData.dateWork,
                academicStatus: action.userData.academicStatus,
                dateBirth: action.userData.dateBirth,
                isAdmin: action.userData.isAdmin,
                phoneNumber: action.userData.phoneNumber,
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
