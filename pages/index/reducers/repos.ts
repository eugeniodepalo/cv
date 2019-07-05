import update from 'immutability-helper'
import { Action } from '../actions/repos'

const fetch = (state: any) =>
  update(state, {
    isFetching: { $set: true }
  })

const fetchSuccess = (state: any, results: any) =>
  update(state, {
    isFetching: { $set: false },
    error: { $set: undefined },
    results: { $set: results }
  })

const fetchError = (state: any, error: any) =>
  update(state, {
    isFetching: { $set: false },
    error: { $set: error },
    results: { $set: undefined }
  })

const initialState: any = {
  results: null,
  isFetching: false
}

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case Action.FETCH:
      return fetch(state)
    case Action.FETCH_SUCCESS:
      return fetchSuccess(state, action.results)
    case Action.FETCH_ERROR:
      return fetchError(state, action.error)
  }

  return state
}
