import { takeEvery, call, put } from 'redux-saga/effects';
import { eventActions } from '../actions/eventActions';
import { AuthAPI } from '../api';

function* workCreateEvent({ eventData }) {
  try {
    yield put(eventActions.createEventLoading());
    let response = yield call(createEvent, eventData);

    yield put(eventActions.createEventSuccess(response.data.event));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(eventActions.createEventFail(errorMessage));
  }
}

function* workQueryEvents() {
  try {
    let response = yield call(getEvents);

    yield put(eventActions.queryEventsSuccess(response.data.events));
  } catch (e) {
    let errorMessage = e.response ? e.response.data.message : e.message;

    yield put(eventActions.queryEventsFail(errorMessage));
  }
}

export function* watchCreateEvent() {
  yield takeEvery(eventActions.types.CREATE_EVENT, workCreateEvent);
}

export function* watchQueryEvents() {
  yield takeEvery(eventActions.types.QUERY_EVENTS, workQueryEvents);
}

const createEvent = (eventData) => {
  return AuthAPI.post(`/events/create`, eventData);
};

const getEvents = () => {
  return AuthAPI.get(`/events`);
};
