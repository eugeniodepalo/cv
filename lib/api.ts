import Octokit from '@octokit/rest'
const octokit = new Octokit()

const fetchRepo = async (repo: any) => {
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

const fetchRepos = async (repos: any) => Promise.all(repos.map(fetchRepo))

export { fetchRepos }
