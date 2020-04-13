import { reducer as formReducer } from 'redux-form'
import { userReducer } from './userReducer'
import { subjectReducer } from './subjectReducer'

export const rootReducer = {
  form: formReducer,
  user: userReducer,
  subjects: subjectReducer
}
