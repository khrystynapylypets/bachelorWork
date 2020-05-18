import { reducer as formReducer } from 'redux-form';
import { userReducer } from './userReducer';
import { professorsReducer } from './professorsReducer';
import { eventReducer } from './eventReducer';

export const rootReducer = {
  form: formReducer,
  user: userReducer,
  professors: professorsReducer,
  event: eventReducer,
};
