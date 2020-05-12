const types = {
    GET_ALL_SUBJECTS: 'GET_ALL_SUBJECTS',
    GET_ALL_SUBJECTS_SUCCESS: 'GET_ALL_SUBJECTS_SUCCESS',
    GET_ALL_SUBJECTS_FAIL: 'GET_ALL_SUBJECTS_FAIL',

    GET_GENERAL_SUBJECTS: 'GET_GENERAL_SUBJECTS',
    GET_GENERAL_SUBJECTS_SUCCESS: 'GET_GENERAL_SUBJECTS_SUCCESS',
    GET_GENERAL_SUBJECTS_FAIL: 'GET_GENERAL_SUBJECTS_FAIL',

    GET_SPECIALITY_SUBJECTS: 'GET_SPECIALITY_SUBJECTS',
    GET_SPECIALITY_SUBJECTS_SUCCESS: 'GET_SPECIALITY_SUBJECTS_SUCCESS',
    GET_SPECIALITY_SUBJECTS_FAIL: 'GET_SPECIALITY_SUBJECTS_FAIL',

    GET_SELECTIVE_SUBJECTS: 'GET_SELECTIVE_SUBJECTS',
    GET_SELECTIVE_SUBJECTS_SUCCESS: 'GET_SELECTIVE_SUBJECTS_SUCCESS',
    GET_SELECTIVE_SUBJECTS_FAIL: 'GET_SELECTIVE_SUBJECTS_FAIL',

    CREATE_EMPTY_SCHEDULE: 'CREATE_EMPTY_SCHEDULE',
    ADD_SUBJECT: 'ADD_SUBJECT',
    ADD_COEFFICIENT: 'ADD_COEFFICIENT',
    DELETE_SUBJECT: 'DELETE_SUBJECT',
};

//ALL
export const getAllSubjects = () => ({
    type: types.GET_ALL_SUBJECTS,
  })
  
  export const getAllSubjectsSuccess = (data) => ({
    type: types.GET_ALL_SUBJECTS_SUCCESS,
    data
  })
  
  export const getAllSubjectsFail = (error) => ({
    type: types.GET_ALL_SUBJECTS_FAIL,
    error
  })
  
  //GENERAL
  export const getGeneralSubjects = () => ({
    type: types.GET_GENERAL_SUBJECTS,
  })
  
  export const getGeneralSubjectsSuccess = (data) => ({
    type: types.GET_GENERAL_SUBJECTS_SUCCESS,
    data
  })
  
  export const getGeneralSubjectsFail = (error) => ({
    type: types.GET_GENERAL_SUBJECTS_FAIL,
    error
  })
  
  //SPECIALITY
  export const getSpecialitySubjects = () => ({
    type: types.GET_SPECIALITY_SUBJECTS,
  })
  
  export const getSpecialitySubjectsSuccess = (data) => ({
    type: types.GET_SPECIALITY_SUBJECTS_SUCCESS,
    data
  })
  
  export const getSpecialitySubjectsFail = (error) => ({
    type: types.GET_SPECIALITY_SUBJECTS_FAIL,
    error
  })
  
  //SELECTIVE
  export const getSelectiveSubjects = () => ({
    type: types.GET_SELECTIVE_SUBJECTS,
  })
  
  export const getSelectiveSubjectsSuccess = (data) => ({
    type: types.GET_SELECTIVE_SUBJECTS_SUCCESS,
    data
  })
  
  export const getSelectiveSubjectsFail = (error) => ({
    type: types.GET_SELECTIVE_SUBJECTS_FAIL,
    error
  })

  //
  export const createEmptySchedule = (numberOfSemesters) => ({
    type: types.CREATE_EMPTY_SCHEDULE,
    numberOfSemesters
  })
  
  export const addSubject = (numberOfSemester, subject) => ({
    type: types.ADD_SUBJECT,
    numberOfSemester,
    subject
  })
  
  export const addCoefficient = (idOfSubject, coefficient) => ({
    type: types.ADD_COEFFICIENT,
    idOfSubject,
    coefficient
  })
  
  export const deleteSubject = (idOfSubject, typeOfSubject, numberOfSemester) => ({
    type: types.DELETE_SUBJECT,
    idOfSubject,
    typeOfSubject,
    numberOfSemester
  })

export const subjectsActions = {
    types,
    bind: (dispatch) => ({
        getAllSubjects: () => dispatch(getAllSubjects()),
        getGeneralSubjects: () => dispatch(getGeneralSubjects()),
        getSpecialitySubjects: () => dispatch(getSpecialitySubjects()),
        getSelectiveSubjects: () => dispatch(getSelectiveSubjects()),
        createEmptySchedule: (numberOfSemesters) => dispatch(createEmptySchedule(numberOfSemesters)),
        addSubject: (numberOfSemester, subject) => dispatch(addSubject(numberOfSemester, subject)),
        addCoefficient: (idOfSubject, coefficient) => dispatch(addCoefficient(idOfSubject, coefficient)),
        deleteSubject: (idOfSubject, typeOfSubject, numberOfSemester) => dispatch(deleteSubject(idOfSubject, typeOfSubject, numberOfSemester)),
    }),
    getAllSubjectsSuccess,
    getAllSubjectsFail,
    getGeneralSubjectsSuccess,
    getGeneralSubjectsFail,
    getSpecialitySubjectsSuccess,
    getSpecialitySubjectsFail,
    getSelectiveSubjectsSuccess,
    getSelectiveSubjectsFail,
};