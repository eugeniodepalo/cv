import { types as actionTypes } from './actions'
import { incrementCount, decrementCount } from './handlers'

export default (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return incrementCount(state)
    case actionTypes.DECREMENT:
      return decrementCount(state)
    default:
      return state
  }
}
