import {
    QUERY_PROFESSORS_LOADING,
    QUERY_PROFESSORS_FAIL,
    QUERY_PROFESSORS_SUCCESS,
    CLEAR_FILTERS,
    UPDATE_FILTER,
    SORT_PROFESSORS,
} from '../actions/constants'
import _ from 'lodash'

const initalState = {
    list: [],
    isQuerying: false,
    filter: {
        text: null,
        academicStatus: null,
        emailStartsWith: null,
        lastModified: null,
    },
    count: 0,
    error: '',
}

export function professorsReducer(prevState = initalState, action) {
    switch(action.type) {
        case QUERY_PROFESSORS_LOADING:
            return {
                ...prevState,
                isQuerying: true,
            }
        case QUERY_PROFESSORS_FAIL:
            return {
                ...prevState,
                isQuerying: false,
                error: action.error,
            }
        case QUERY_PROFESSORS_SUCCESS:
            return {
                ...prevState,
                isQuerying: false,
                error: '',
                list: _.cloneDeep(action.professors),
                count: action.count,
            }
        case CLEAR_FILTERS:
            return {
                ...prevState,
                filter: {
                    ...initalState.filter,
                    lastModified: action.lastModified,
                }
            }
        case UPDATE_FILTER:
            return {
                ...prevState,
                filter: {
                    ..._.set(_.cloneDeep(prevState.filter), action.path, action.value),
                    lastModified: action.lastModified,
                }
            }
        default:
            return prevState
    }

}

