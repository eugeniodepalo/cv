export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const incrementCount = (): any => ({ type: types.INCREMENT })
export const decrementCount = (): any => ({ type: types.DECREMENT })
