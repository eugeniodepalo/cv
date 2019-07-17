import { Action, ActionCreator } from 'redux'
import repos, { Repo } from '~/cv/data/repos'
import { FetchedRepo } from '~/api'

export enum ActionType {
  FETCH = 'REPOS_FETCH',
  FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS',
  FETCH_ERROR = 'REPOS_FETCH_ERROR'
}

export interface FetchAction extends Action<ActionType.FETCH> {
  repos: Repo[]
}

export interface FetchSuccessAction extends Action<ActionType.FETCH_SUCCESS> {
  results: FetchedRepo[]
}

export interface FetchErrorAction extends Action<ActionType.FETCH_ERROR> {
  error: Error
}

export type Action = FetchAction | FetchSuccessAction | FetchErrorAction

export const fetch: ActionCreator<FetchAction> = () => ({
  type: ActionType.FETCH,
  repos
})

export const fetchSuccess: ActionCreator<FetchSuccessAction> = (results: FetchedRepo[]) => ({
  type: ActionType.FETCH_SUCCESS,
  results
})

export const fetchError: ActionCreator<FetchErrorAction> = (error: Error) => ({
  type: ActionType.FETCH_ERROR,
  error
})
