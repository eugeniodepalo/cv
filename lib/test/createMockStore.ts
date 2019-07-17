import configureStore, { MockStoreCreator } from 'redux-mock-store'
import createSagaMiddleware, { Saga } from 'redux-saga'

export default function<S>(saga: Saga): MockStoreCreator<S> {
  const sagaMiddleware = createSagaMiddleware()
  const mockStore = configureStore<S>([sagaMiddleware])

  return (initialState: S) => {
    const store = mockStore(initialState)
    sagaMiddleware.run(saga)
    return store
  }
}
