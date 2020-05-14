import { subjectsActions } from '../../actions/subjectsActions';
import _ from 'lodash';

const initState = {
  numberOfSemesters: 0,
  semesters: [],
};

export const createScheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case subjectsActions.types.CREATE_EMPTY_SCHEDULE: {
      const { numberOfSemesters } = action;

      return {
        ...state,
        numberOfSemesters: numberOfSemesters,
        semesters: [ ...Array(numberOfSemesters) ].map(() => ({
          generalSubjects: [],
          specialitySubjects: [],
          selectiveSubjects: [],
        })),
      };
    }
    case subjectsActions.types.ADD_SUBJECT: {
      const { numberOfSemester, subject } = action;

      return {
        ...state,
        [subject.id]: {
          name: subject.name,
          type: subject.type,
          coefficient: 0,
          teachers: [],
        },
        semesters: state.semesters.map((item, index) => {
          if (index === numberOfSemester) {
            if (subject.type === 'general') {
              if (item.generalSubjects.find(element => element === subject.id)) {
                return { ...item };
              }
              return {
                ...item,
                generalSubjects: [ ...item.generalSubjects, subject.id ],
              };
            }
            if (subject.type === 'speciality') {
              if (item.specialitySubjects.find(element => element === subject.id)) {
                return { ...item };
              }
              return {
                ...item,
                specialitySubjects: [ ...item.specialitySubjects, subject.id ],
              };
            }
            if (item.selectiveSubjects.find(element => element === subject.id)) {
              return { ...item };
            }
            return {
              ...item,
              selectiveSubjects: [ ...item.selectiveSubjects, subject.id ],
            };
          }
          else
            return { ...item };
        }),
      };
    }
    case subjectsActions.types.ADD_COEFFICIENT: {
      const { idOfSubject, coefficient } = action;

      return {
        ...state,
        [idOfSubject]: {
          name: state[idOfSubject].name,
          type: state[idOfSubject].type,
          coefficient: coefficient,
          teachers: state[idOfSubject].teachers,
        },
      };
    }
    case subjectsActions.types.DELETE_SUBJECT: {
      const { idOfSubject, typeOfSubject, numberOfSemester } = action;

      return {
        ...state,
        semesters: state.semesters.map((item, index) => {
          if (index === numberOfSemester) {
            _.pull(item[typeOfSubject], idOfSubject);
            return {
              ...item,
              [typeOfSubject]: item[typeOfSubject],
            };
          }
          else
            return { ...item };
        }),
      };
    }
    default:
      return state;
  }
};
