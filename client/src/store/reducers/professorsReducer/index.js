import _ from 'lodash';
import { professorsActions } from '../../actions/professorsActions';

const initialState = {
  list: [],
  isQuerying: false,
  filter: {
    text: null,
    academicStatus: null,
    email: null,
    phone: null,
    lastModified: null,
  },
  sortOptions: {
    name: 'Алфавітом',
    lastCreated: 'Останніми створеними',
    firstCreated: 'Першими створеними',
  },
  sortKey: 'name',

  count: 0,
  error: '',
};

export function professorsReducer(prevState = initialState, action) {
  const { types } = professorsActions;

  switch (action.type) {
    case types.QUERY_PROFESSORS_LOADING:
      return {
        ...prevState,
        isQuerying: true,
      };
    case types.QUERY_PROFESSORS_FAIL:
      return {
        ...prevState,
        isQuerying: false,
        error: action.error,
      };
    case types.QUERY_PROFESSORS_SUCCESS:
      return {
        ...prevState,
        isQuerying: false,
        error: '',
        list: _.cloneDeep(action.professors),
        count: action.count,
      };
    case types.CLEAR_FILTERS:
      return {
        ...prevState,
        filter: {
          ...initialState.filter,
          lastModified: action.lastModified,
        },
      };
    case types.UPDATE_FILTER:
      return {
        ...prevState,
        filter: {
          ..._.set(_.cloneDeep(prevState.filter), action.path, action.value),
          lastModified: action.lastModified,
        },
      };
    case types.SORT_PROFESSORS:
      return {
        ...prevState,
        sortKey: action.sortKeyOption,
      };
    default:
      return prevState;
  }
}

