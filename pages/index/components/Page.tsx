import styled from 'styled-components'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from '@rebass/grid'
import { transparentize } from 'polished'
import { StickyContainer, Sticky } from 'react-sticky'
import { Layout, Section, Link } from '~/components'
import { Header, PositionItem, ProjectItem, RepoItem } from './Page/'
import { positions, projects } from '../cv/data'
import { getRepos, getIsFetchingRepos, getReposError } from '../selectors/repos'
import { fetch as fetchRepos } from '../actions/repos'

const Container = styled.div`
  border-top: 6px solid #333;
  background-color: ${(props) => props.theme.bgColor};
`

const Footer = styled.footer`
  text-align: center;
`

const StickyWrapper = styled.div`
  background-color: ${(props) => transparentize(0.1, props.theme.bgColor)};
`

const Error = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.errorColor};
`

const stickyContent = ({ style, isSticky }: any) => (
  <div style={style}>
    <StickyWrapper>
      <Box pb={isSticky ? 0 : 3}>
        <Section>
          <Header isSticky={isSticky} />
        </Section>
      </Box>
    </StickyWrapper>
  </div>
)

const Page = class extends Component<any> {
  public componentDidMount() {
    this.props.fetchRepos()
  }

  public render() {
    return (
      <Layout title="CV">
        <Box mb={3}>
          <Container>
            <StickyContainer>
              <Sticky topOffset={200}>{stickyContent}</Sticky>
              <main>
                <Section title="Positions" id="positions" pt={0}>
                  {positions.map((p) => (
                    <PositionItem position={p} key={p.id} />
                  ))}
                </Section>
                <Section title="Repos" id="repos" pt={0}>
                  {this.props.reposError && <Error>There was an error fetching repos.</Error>}
                  {this.props.isFetchingRepos
                    ? 'Fetching repos...'
                    : (this.props.repos || []).map((r: any) => <RepoItem repo={r} key={r.id} />)}
                </Section>
                <Section title="Projects" id="projects">
                  {projects.map((p) => (
                    <ProjectItem project={p} key={p.id} />
                  ))}
                </Section>
              </main>
            </StickyContainer>
          </Container>
        </Box>
        <Footer>
          Fork this resume on <Link href="https://github.com/eugeniodepalo/cv">GitHub</Link>
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state: any) => ({
  repos: getRepos(state),
  isFetchingRepos: getIsFetchingRepos(state),
  reposError: getReposError(state)
})

const mapDispatchToProps = { fetchRepos }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
