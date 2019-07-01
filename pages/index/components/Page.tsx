import styled from 'styled-components'
import { connect } from 'react-redux'
import { Box } from '@rebass/grid'
import { Layout, Section, Link } from '~/components'
import { Header, PositionItem, ProjectItem, RepoItem } from './Page/'
import { positions, projects, repos } from '../cv'

const Container = styled.div`
  border-top: 6px solid #333;
  background-color: ${(props) => props.theme.bgColor};
`

const Footer = styled.footer`
  text-align: center;
`

const Page = (): JSX.Element => (
  <Layout title="CV">
    <Box mb={3}>
      <Container>
        <Section>
          <Header />
        </Section>
        <main>
          <Section title="Positions">
            {positions.map((p) => (
              <PositionItem position={p} key={p.id} />
            ))}
          </Section>
          <Section title="Projects">
            {projects.map((p) => (
              <ProjectItem project={p} key={p.id} />
            ))}
          </Section>
          <Section title="Repos">
            {repos.map((r) => (
              <RepoItem repo={r} key={r.id} />
            ))}
          </Section>
        </main>
      </Container>
    </Box>
    <Footer>
      Fork this resume on <Link href="https://github.com/eugeniodepalo/cv">GitHub</Link>
    </Footer>
  </Layout>
)

const mapStateToProps = (/* state */): any => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
