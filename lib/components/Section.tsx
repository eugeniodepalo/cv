import { Box } from '@rebass/grid'
import styled from 'styled-components'

const Title = styled.h1`
  height: 0;
  visibility: hidden;
`

export default ({ children, title, ...props }: any) => (
  <Box p={3} as="section" {...props}>
    <Title>{title}</Title>
    {children}
  </Box>
)
