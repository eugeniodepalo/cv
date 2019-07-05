import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

export default (reducer: any, initialState: any, saga: any) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(saga)
  return store
}
