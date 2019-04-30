export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const incrementCount = () => {
  return { type: types.INCREMENT }
}

export const decrementCount = () => {
  return { type: types.DECREMENT }
}
