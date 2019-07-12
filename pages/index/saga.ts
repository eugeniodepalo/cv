import { all } from 'redux-saga/effects'
import reposSaga from './sagas/repos'

export default function*() {
  yield all([reposSaga()])
}
