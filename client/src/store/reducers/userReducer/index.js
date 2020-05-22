import { userActions } from '../../actions/userActions';

const initialState = {
  currentUser: {
    id: null,
    isAdmin: false,
    error: null,
    loading: true,
  },
  selectedUser: {
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
    error: null,
    loading: true,
    created: null,
    canCreateSchedule: false,
  },
};

export const userReducer = (prevState = initialState, action) => {
  const { types } = userActions;

  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...prevState,
        currentUser: {
          ...prevState.currentUser,
          error: null,
        },
      };
    case types.REGISTER_FAIL:
      return {
        ...prevState,
        currentUser: {
          ...prevState.currentUser,
          error: action.error,
        },
      };
    case types.LOGIN_SUCCESS:
      return {
        ...prevState,
        currentUser: {
          ...prevState.currentUser,
          loading: false,
          error: '',
        },
      };
    case types.LOGIN_FAIL:
      return {
        ...prevState,
        currentUser: {
          ...prevState.currentUser,
          error: action.error,
        },
      };
    case types.INIT:
      return {
        ...prevState,
        currentUser: {
          ...prevState.currentUser,
          id: action.userData.id,
          isAdmin: action.userData.isAdmin,
          loading: false,
          error: null,
        },
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case types.GET_USER_DATA_LOADING:
      return {
        ...prevState,
        selectedUser: {
          ...prevState.selectedUser,
          loading: true,
          error: null,
        },
      };
    case types.GET_USER_DATA_SUCCESS:
      return {
        ...prevState,
        selectedUser: {
          ...prevState.selectedUser,
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
          created: action.userData.created,
          canCreateSchedule: action.userData.canCreateSchedule,
          loading: false,
        },
      };
    case types.GET_USER_DATA_FAIL:
      return {
        ...prevState,
        selectedUser: {
          ...prevState.selectedUser,
          loading: false,
          error: action.error,
        },
      };
    default:
      return prevState;
  }
};
