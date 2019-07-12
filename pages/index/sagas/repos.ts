import { put, takeLeading, PutEffect, ForkEffect } from 'redux-saga/effects'
import { fetchRepos, FetchedRepo } from '~/api'
import {
  ActionType,
  FetchAction,
  FetchSuccessAction,
  FetchErrorAction,
  fetchError,
  fetchSuccess
} from '../actions/repos'

type FetchFunction = (
  action: FetchAction
) => IterableIterator<Promise<FetchedRepo[]> | PutEffect<FetchSuccessAction> | PutEffect<FetchErrorAction>>

const fetch: FetchFunction = function*({ repos }) {
  try {
    const results = yield fetchRepos(repos)
    yield put(fetchSuccess(results))
  } catch (error) {
    yield put(fetchError(error))
  }
}

export default function*(): IterableIterator<ForkEffect> {
  yield takeLeading(ActionType.FETCH, fetch)
}
