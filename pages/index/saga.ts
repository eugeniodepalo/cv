import reposSaga from './sagas/repos'
import { all } from 'redux-saga/effects'

export default function*() {
  yield all([reposSaga()])
}
