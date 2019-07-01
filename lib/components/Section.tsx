import { Box } from '@rebass/grid'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
`

export default ({ children, title, ...props }: any) => (
  <Box p={3} as="section" {...props}>
    <Box mb="3">
      <Title>{title}</Title>
    </Box>
    {children}
  </Box>
)
