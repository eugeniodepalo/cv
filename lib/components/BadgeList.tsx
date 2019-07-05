import styled from 'styled-components'
import { lighten } from 'polished'
import { Flex, Box } from '@rebass/grid'

const BadgeList = styled(Flex)`
  display: inline-flex;
`

const Badge = styled.div`
  background-color: ${(props) => lighten(0.2, props.theme.activeColor)};
`

export default ({ values }: any) => (
  <BadgeList flexWrap="wrap">
    {values.map((value: any) => (
      <Box mr={1} mb={1}>
        <Badge>{value}</Badge>
      </Box>
    ))}
  </BadgeList>
)
