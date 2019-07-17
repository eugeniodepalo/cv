import { all, AllEffect, ForkEffect } from 'redux-saga/effects'
import reposSaga from './sagas/repos'

export default function*(): IterableIterator<AllEffect<IterableIterator<ForkEffect>>> {
  yield all([reposSaga()])
}
