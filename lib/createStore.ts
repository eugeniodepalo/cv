import { createStore as reduxCreateStore, applyMiddleware, Store, Reducer, Action, DeepPartial } from 'redux'
import createSagaMiddleware, { Saga } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

interface CreateStoreFunction {
  <S, A extends Action>(reducer: Reducer<S, A>, initialState: DeepPartial<S>, saga: Saga): Store<S, A>
}

const createStore: CreateStoreFunction = (reducer, initialState, saga) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(saga)
  return store
}

export default createStore
