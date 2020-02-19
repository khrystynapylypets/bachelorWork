import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(combineReducers(rootReducer),
      composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  }
}
