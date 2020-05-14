import { userActions } from '../../actions/userActions';


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
  error: null,
  loading: true,
};

export const userReducer = (prevState = initState, action) => {
  switch (action.type) {
    case userActions.types.REGISTER_SUCCESS:
      return {
        ...prevState,
        error: null,
      };
    case userActions.types.REGISTER_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    case userActions.types.LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        error: '',
      };
    case userActions.types.LOGIN_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    case userActions.types.INIT:
      return {
        ...prevState,
        id: action.userData.id,
        isAdmin: action.userData.isAdmin,
        loading: false,
        error: null,
      };
    case userActions.types.LOGOUT_SUCCESS:
      return {
        ...initState,
      };
    case userActions.types.GET_USER_DATA_LOADING:
      return {
        ...prevState,
        loading: true,
        error: null,
      };
    case userActions.types.GET_USER_DATA_SUCCESS:
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
      };
    case userActions.types.GET_USER_DATA_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.error,
      };
    default:
      return prevState;
  }
};
