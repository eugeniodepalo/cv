import { repos } from '../cv/data'

export enum Action {
  FETCH = 'REPOS_FETCH',
  FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS',
  FETCH_ERROR = 'REPOS_FETCH_ERROR'
}

export const fetch = () => ({
  type: Action.FETCH,
  repos
})

export const fetchSuccess = (results: any) => ({
  type: Action.FETCH_SUCCESS,
  results
})

export const fetchError = (error: any) => ({
  type: Action.FETCH_ERROR,
  error
})
