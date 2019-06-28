import Head from 'next/head'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

const Container = styled(Box)`
  max-width: 1024px;
  font-family: courier;
`

export default ({ title, children }: any) => {
  return (
    <Container mx="auto" my={4}>
      <Head>
        <title>Eugenio Depalo - {title}</title>
      </Head>
      {children}
    </Container>
  )
}
