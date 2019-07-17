import { Component, ReactNode, ReactElement } from 'react'
import { connect } from 'react-redux'
import { ActionCreator, Store } from 'redux'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { transparentize } from 'polished'
import { StickyContainer, Sticky, StickyChildArgs } from 'react-sticky'
import { Layout, Section, Link } from '~/components'
import { positions, projects } from '~/cv/data'
import { Project } from '~/cv/data/projects'
import { Entity } from '~/cv/buildEntities'
import { Header, PositionItem, LinkableItem } from './Page/'
import { getRepos, getIsFetchingRepos, getReposError } from '../selectors/repos'
import { fetch as fetchReposAction, FetchAction } from '../actions/repos'
import { State } from '../reducer'
import { FetchedRepo } from '~/api'

interface StateProps {
  repos: FetchedRepo[]
  isFetchingRepos: boolean
  reposError: Error
}

interface DispatchProps {
  fetchRepos: ActionCreator<FetchAction>
}

interface Props extends StateProps, DispatchProps {
  store?: Store<State>
}

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

const stickyContent = ({ style, isSticky }: StickyChildArgs): ReactElement => (
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

const Page = class extends Component<Props> {
  public componentDidMount(): void {
    const { fetchRepos } = this.props
    fetchRepos()
  }

  public render(): ReactNode {
    const { reposError, isFetchingRepos, repos } = this.props

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
                  {reposError && <Error>There was an error fetching repos.</Error>}
                  {isFetchingRepos
                    ? 'Fetching repos...'
                    : (repos || []).map((r: Entity & Project | FetchedRepo) => <LinkableItem entity={r} key={r.id} />)}
                </Section>
                <Section title="Projects" id="projects">
                  {projects.map((p) => (
                    <LinkableItem entity={p} key={p.id} />
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

const mapStateToProps = (state: State): StateProps => ({
  repos: getRepos(state),
  isFetchingRepos: getIsFetchingRepos(state),
  reposError: getReposError(state)
})

const mapDispatchToProps: DispatchProps = { fetchRepos: fetchReposAction }

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Page)
