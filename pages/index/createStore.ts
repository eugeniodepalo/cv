import baseCreateStore from '../../lib/createStore';
import { types as actionTypes } from './actions';
import { handleIncrementCount, handleDecrementCount } from './handlers';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return handleIncrementCount(state)
    case actionTypes.DECREMENT:
      return handleDecrementCount(state)
    default:
      return state
  }
}

export default (state = initialState) => {
  return baseCreateStore(reducer, state)
}
