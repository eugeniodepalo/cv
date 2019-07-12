import { Box, BoxProps } from '@rebass/grid'
import styled from 'styled-components'
import { FunctionComponent, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  title?: string
}

const Title = styled.h1`
  font-size: 2rem;
`

const Section: FunctionComponent<Props & BoxProps> = ({ children, title, ...props }) => (
  <Box p={3} as="section" {...props}>
    {title && (
      <Box mb={3}>
        <Title>{title}</Title>
      </Box>
    )}
    {children}
  </Box>
)

export default Section
