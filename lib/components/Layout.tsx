import Head from 'next/head'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { FunctionComponent } from 'react'

interface Props {
  title: string
}

const Container = styled(Box)`
  max-width: 1024px;
  font-family: courier;
`

const Layout: FunctionComponent<Props> = ({ title, children }) => (
  <Container mx="auto" my={[0, 0, 4]}>
    <Head>
      <title>Eugenio Depalo - {title}</title>
    </Head>
    {children}
  </Container>
)

export default Layout
