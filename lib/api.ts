const { assign } = Object

const fetchRepos = (repos: any) =>
  Promise.resolve(
    repos.map((r: any) =>
      assign({}, r, {
        websiteUrl: `https://github.com/${r.name}`
      })
    )
  )

export { fetchRepos }
