import { combineReducers } from 'redux'
import reposReducer from './reducers/repos'

const reducer = combineReducers({
  repos: reposReducer
})

export type State = ReturnType<typeof reducer>
export default reducer
