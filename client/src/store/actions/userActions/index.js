const types = {
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAILED',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  INIT: 'INIT',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAIL: 'RESET_PASSWORD_FAIL',
  GET_USER_DATA: 'GET_USER _DATA',
  GET_USER_DATA_LOADING: 'GET_USER_DATA_LOADING',
  GET_USER_DATA_SUCCESS: 'GET_USER_DATA_SUCCESS',
  GET_USER_DATA_FAIL: 'GET_USER_DATA_FAIL',
};

const registerUser = (user) => ({
  type: types.REGISTER,
  user,
});

const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  error,
});

const loginUser = (user) => ({
  type: types.LOGIN,
  user,
});

const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  data,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  error,
});

const logoutUser = () => ({
  type: types.LOGOUT,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const resetPassword = (email) => ({
  type: types.RESET_PASSWORD,
  email,
});

const resetPasswordSuccess = (data) => ({
  type: types.RESET_PASSWORD_SUCCESS,
  data,
});

const resetPasswordFail = (error) => ({
  type: types.RESET_PASSWORD_FAIL,
  error,
});

const getUserData = (userId) => ({
  type: types.GET_USER_DATA,
  userId,
});

const getUserDataLoading = () => ({
  type: types.GET_USER_DATA_LOADING,
});

const getUserDataSuccess = (userData) => ({
  type: types.GET_USER_DATA_SUCCESS,
  userData,
});

const getUserDataFail = (error) => ({
  type: types.GET_USER_DATA_FAIL,
  error,
});

const initUser = (userData) => ({
  type: types.INIT,
  userData,
});

export const userActions = {
  types,
  bind: (dispatch) => ({
    registerUser: (user) => dispatch(registerUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser()),
    resetPassword: (email) => dispatch(resetPassword(email)),
    getUserData: (userData) => dispatch(getUserData(userData)),
  }),
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  logoutSuccess,
  resetPasswordSuccess,
  resetPasswordFail,
  getUserDataLoading,
  getUserDataSuccess,
  getUserDataFail,
  initUser,
};
