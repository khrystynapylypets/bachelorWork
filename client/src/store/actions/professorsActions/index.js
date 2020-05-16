const types = {
  QUERY_PROFESSORS: 'QUERY_PROFESSORS',
  QUERY_PROFESSORS_LOADING: 'QUERY_PROFESSORS_LOADING',
  QUERY_PROFESSORS_FAIL: 'QUERY_PROFESSORS_FAIL',
  QUERY_PROFESSORS_SUCCESS: 'QUERY_PROFESSORS_SUCCESS',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  UPDATE_FILTER: 'UPDATE_FILTER',
  SORT_PROFESSORS: 'SORT_PROFESSORS',
};

const queryProfessors = () => ({
  type: types.QUERY_PROFESSORS,
});

const queryProfessorsLoading = () => ({
  type: types.QUERY_PROFESSORS_LOADING,
});

const queryProfessorsFail = (error) => ({
  type: types.QUERY_PROFESSORS_FAIL,
  error,
});

const queryProfessorsSuccess = (professors, count) => ({
  type: types.QUERY_PROFESSORS_SUCCESS,
  professors,
  count,
});

const clearFilters = () => ({
  type: types.CLEAR_FILTERS,
  lastModified: Date.now(),
});

const updateFilter = (path, value) => ({
  type: types.UPDATE_FILTER,
  path,
  value,
  lastModified: Date.now(),
});

const sortList = (sortOption) => ({
  type: types.SORT_PROFESSORS,
  sortOption,
});

export const professorsActions = {
  types,
  bind: (dispatch) => ({
    queryProfessors: () => dispatch(queryProfessors()),
    clearFilters: () => dispatch(clearFilters()),
    updateFilter: (path, value) => dispatch(updateFilter(path, value)),
    sortList: (option) => dispatch(sortList(option)),
  }),
  queryProfessorsLoading,
  queryProfessorsFail,
  queryProfessorsSuccess,
};
