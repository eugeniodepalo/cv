import update from 'immutability-helper'
import { Reducer } from 'redux'
import { FetchedRepo } from '~/api'
import { ActionType, Action } from '../actions/repos'

interface State {
  results?: FetchedRepo[]
  error?: Error
  isFetching: boolean
}

const fetch = (state: State): State =>
  update(state, {
    isFetching: { $set: true }
  })

const fetchSuccess = (state: State, results: FetchedRepo[]) =>
  update(state, {
    $merge: {
      isFetching: false,
      error: undefined,
      results
    }
  })

const fetchError = (state: State, error?: Error) =>
  update(state, {
    $merge: {
      isFetching: false,
      error,
      results: undefined
    }
  })

const initialState: State = {
  results: null,
  isFetching: false
}

const reducer: Reducer<State, Action> = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH:
      return fetch(state)
    case ActionType.FETCH_SUCCESS:
      return fetchSuccess(state, action.results)
    case ActionType.FETCH_ERROR:
      return fetchError(state, action.error)
    default:
      return state
  }
}

export default reducer
