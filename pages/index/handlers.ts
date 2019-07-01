import update from 'immutability-helper'

export const incrementCount = (state: any): any =>
  update(state, {
    count: { $set: state.count + 1 }
  })

export const decrementCount = (state: any): any =>
  update(state, {
    count: { $set: state.count - 1 }
  })
