import Octokit from '@octokit/rest'
import { Repo } from '~/cv/data/repos'

export interface FetchedRepo extends Repo {
  description: string
  websiteUrl: string
}

const octokit = new Octokit()

const fetchRepo = async (repo: Repo): Promise<FetchedRepo> => {
  const [owner, name] = repo.name.split('/')

  const {
    data: { description }
  } = await octokit.repos.get({
    owner,
    repo: name
  })

  return {
    name,
    techs: repo.techs,
    websiteUrl: `https://github.com/${repo.name}`,
    description
  }
}

export const fetchRepos = async (repos: Repo[]): Promise<FetchedRepo[]> => Promise.all(repos.map(fetchRepo))
