import { reducer as formReducer } from 'redux-form';
import { userReducer } from './userReducer';

export const rootReducer = {
  form: formReducer,
  user: userReducer,
};
