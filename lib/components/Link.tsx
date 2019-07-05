import { Box } from '@rebass/grid'
import styled from 'styled-components'

const Link = styled(Box)`
  display: inline-block;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.linkColor};

  &:hover {
    background-color: ${(props) => props.theme.activeColor};
    color: ${(props) => props.theme.primaryColor};
  }
`

Link.defaultProps = {
  p: 2,
  mr: 1,
  as: 'a',
  target: '_blank'
}

export default Link
