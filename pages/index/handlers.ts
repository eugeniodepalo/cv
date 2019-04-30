export const handleIncrementCount = (state: any) => {
  return Object.assign({}, state, {
    count: state.count + 1
  })
}

export const handleDecrementCount = (state: any) => {
  return Object.assign({}, state, {
    count: state.count - 1
  })
}
