import { State } from '../reducer'
import { FetchedRepo } from '~/api'

export const getRepos = (s: State): FetchedRepo[] => s.repos.results
export const getIsFetchingRepos = (s: State): boolean => s.repos.isFetching
export const getReposError = (s: State): Error => s.repos.error
