import update from 'immutability-helper';

export const handleIncrementCount = (state: any) => {
  return update(state, {
    count: { $set: state.count + 1 }
  })
}

export const handleDecrementCount = (state: any) => {
  return update(state, {
    count: { $set: state.count - 1 }
  })
}
