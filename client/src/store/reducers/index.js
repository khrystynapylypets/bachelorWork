import { reducer as formReducer } from 'redux-form';
import { userReducer } from './userReducer';
import { professorsReducer } from './professorsReducer';

export const rootReducer = {
  form: formReducer,
  user: userReducer,
  professors: professorsReducer,
};
