import { combineReducers } from 'redux'
import reposReducer from './reducers/repos'

export default combineReducers({
  repos: reposReducer
})
