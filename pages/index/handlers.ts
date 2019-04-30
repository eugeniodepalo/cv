import update from 'immutability-helper'

export const incrementCount = (state: any) => {
  return update(state, {
    count: { $set: state.count + 1 }
  })
}

export const decrementCount = (state: any) => {
  return update(state, {
    count: { $set: state.count - 1 }
  })
}
