import { put, takeLeading } from 'redux-saga/effects'
import { fetchRepos } from '~/api'
import { Action, fetchError, fetchSuccess } from '../actions/repos'

function* handleFetch({ repos }: any) {
  try {
    const results = yield fetchRepos(repos)
    yield put(fetchSuccess(results))
  } catch (error) {
    yield put(fetchError(error))
  }
}

export default function*() {
  yield takeLeading(Action.FETCH, handleFetch)
}
