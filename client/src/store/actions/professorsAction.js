import {
    QUERY_PROFESSORS,
    QUERY_PROFESSORS_FAIL,
    QUERY_PROFESSORS_SUCCESS,
    CLEAR_FILTERS,
    UPDATE_FILTER,
    SORT_PROFESSORS,
} from './constants'

export const  queryProfessors = () => ({
    type: QUERY_PROFESSORS,
})

export const  queryProfessorsLoading = () => ({
    type: QUERY_PROFESSORS_FAIL,
})

export const  queryProfessorsFail = (error) => ({
    type: QUERY_PROFESSORS_FAIL,
    error,
})

export const  queryProfessorsSuccess = (professors, count) => ({
    type: QUERY_PROFESSORS_SUCCESS,
    professors,
    count
})

export const  clearFilters = () => ({
    type: CLEAR_FILTERS,
    lastModified: Date.now(),
})

export const  updateFilter = (path, value) => ({
    type: UPDATE_FILTER,
    path,
    value,
    lastModified: Date.now(),
})

export const  sortList = (sortOption) => ({
    type: SORT_PROFESSORS,
    sortOption,
})