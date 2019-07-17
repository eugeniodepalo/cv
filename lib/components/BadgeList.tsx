import styled from 'styled-components'
import { lighten } from 'polished'
import { Flex, Box } from '@rebass/grid'
import { FunctionComponent, ReactElement } from 'react'

interface Props {
  values: string[]
}

const Content = styled(Flex)`
  display: inline-flex;
`

const Badge = styled.div`
  background-color: ${(props) => lighten(0.2, props.theme.activeColor)};
`

const BadgeList: FunctionComponent<Props> = ({ values }): ReactElement => (
  <Content flexWrap="wrap">
    {values.map((value: any) => (
      <Box mr={1} mb={1} key={value}>
        <Badge>{value}</Badge>
      </Box>
    ))}
  </Content>
)

export default BadgeList
