import { subjectsActions } from '../../actions/subjectsActions';

const initState = {
  error: '',
};

export const subjectReducer = (prevState = initState, action) => {
  switch (action.type) {
    //all
    case subjectsActions.types.GET_ALL_SUBJECTS_SUCCESS:
      return {
        ...prevState,
        subjects: action.data,
      };
    case subjectsActions.types.GET_ALL_SUBJECTS_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    //general
    case subjectsActions.types.GET_GENERAL_SUBJECTS_SUCCESS:
      return {
        ...prevState,
        generalSubjects: action.data,
      };
    case subjectsActions.types.GET_GENERAL_SUBJECTS_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    //speciality
    case subjectsActions.types.GET_SPECIALITY_SUBJECTS_SUCCESS:
      return {
        ...prevState,
        specialitySubjects: action.data,
      };
    case subjectsActions.types.GET_SPECIALITY_SUBJECTS_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    //selective
    case subjectsActions.types.GET_SELECTIVE_SUBJECTS_SUCCESS:
      return {
        ...prevState,
        selectiveSubjects: action.data,
      };
    case subjectsActions.types.GET_SELECTIVE_SUBJECTS_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    default:
      return prevState;
  }
};
