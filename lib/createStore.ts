import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default (reducer: any, initialState: any) =>
  reduxCreateStore(reducer, initialState, composeWithDevTools(applyMiddleware()))
