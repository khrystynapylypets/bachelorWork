const types = {
  CREATE_EVENT: 'CREATE_EVENT',
  CREATE_EVENT_LOADING: 'CREATE_EVENT_LOADING',
  CREATE_EVENT_FAIL: 'CREATE_EVENT_FAIL',
  CREATE_EVENT_SUCCESS: 'CREATE_EVENT_SUCCESS',
  QUERY_EVENTS: 'QUERY_EVENTS',
  QUERY_EVENTS_FAIL: 'QUERY_EVENTS_FAIL',
  QUERY_EVENTS_SUCCESS: 'QUERY_EVENTS_SUCCESS',
};

const createEvent = (eventData) => ({
  type: types.CREATE_EVENT,
  eventData,
});

const createEventLoading = () => ({
  type: types.CREATE_EVENT_LOADING,
});

const createEventFail = (error) => ({
  type: types.CREATE_EVENT_FAIL,
  error,
});

const createEventSuccess = () => ({
  type: types.CREATE_EVENT_SUCCESS,
});

const queryEvents = () => ({
  type: types.QUERY_EVENTS,
});

const queryEventsFail = (error) => ({
  type: types.QUERY_EVENTS_FAIL,
  error,
});

const queryEventsSuccess = (events) => ({
  type: types.QUERY_EVENTS_SUCCESS,
  events,
});

export const eventActions = {
  types,
  bind: (dispatch) => ({
    createEvent: (data) => dispatch(createEvent(data)),
    queryEvents: () => dispatch(queryEvents()),
  }),
  createEventLoading,
  createEventFail,
  createEventSuccess,
  queryEventsFail,
  queryEventsSuccess,
};
