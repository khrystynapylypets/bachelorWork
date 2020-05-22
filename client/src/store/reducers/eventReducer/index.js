import { eventActions } from '../../actions/eventActions';

const initialState = {
  isCreating: false,
  error: '',
  events: [],
};

export function eventReducer(prevState = initialState, action) {
  const { types } = eventActions;

  switch (action.type) {
    case types.CREATE_EVENT_LOADING:
      return {
        ...prevState,
        isCreating: true,
      };
    case types.CREATE_EVENT_FAIL:
      return {
        ...prevState,
        isCreating: false,
        error: action.error,
      };
    case types.CREATE_EVENT_SUCCESS:
      return {
        ...prevState,
        isCreating: false,
        error: '',
      };
    case types.QUERY_EVENTS_FAIL:
      return {
        ...prevState,
        error: action.error,
      };
    case types.QUERY_EVENTS_SUCCESS:
      return {
        ...prevState,
        events: action.events,
        error: '',
      };
    default:
      return prevState;
  }
}

