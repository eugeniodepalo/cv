import createStore from 'cv/createStore'
import reducer from './reducer'

const initialState = {
  count: 0
}

export default (state = initialState) => {
  return createStore(reducer, state)
}
