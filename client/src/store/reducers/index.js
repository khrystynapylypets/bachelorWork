import { reducer as formReducer } from 'redux-form'
import { userReducer } from './userReducer'
import { subjectReducer } from './subjectReducer'
import { createScheduleReducer } from './createScheduleReducer'

export const rootReducer = {
  form: formReducer,
  user: userReducer,
  subjects: subjectReducer,
  schedule: createScheduleReducer
}
