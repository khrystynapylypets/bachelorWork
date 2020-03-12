import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../actions/constants'

const initState = {
  userById: {},
  allUsersIds: [],
  error: '',
}

export const userReducer = (prevState = initState, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
          ...prevState,
        userById: {
          [action.user.id]: {
            id: action.user.id,
            email: action.user.email,
            firstName: action.user.firstName,
            secondName: action.user.secondName,
            lastName: action.user.lastName,
            dateWork: action.user.dateWork,
            academicStatus: action.user.academicStatus,
            dateBirth: action.user.dateBirth,
          }
        },
        allUsersIds: [...prevState.allUsersIds, action.user.id],
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
