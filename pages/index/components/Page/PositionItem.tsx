import { Position } from '../../cv/data/positions'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import * as moment from 'moment'
import { Moment } from 'moment'

// export interface Position {
//   name: string
//   description: string
//   highlights: string[]
//   teamSize: TeamSize
//   role: string
//   process: string[]
//   techs: string[],
//   startDate: Moment,
//   endDate: Moment
// }

interface Props {
  position: Position
}

const Title = styled.h1`
  font-size: 1.5rem;
`

export default ({ position }: Props) => {
  const duration = moment.duration(position.endDate.diff(position.startDate)).humanize()

  return (
    <Box as="article" mb={4}>
      <Flex>
        <Box width={3 / 12}>
          <Box mb="2">
            <Title>{position.name}</Title>
          </Box>
          <Box>{duration}</Box>
          <Box></Box>
        </Box>
        <Box width={9 / 12}>
          {position.description}
          <ul>
            {position.highlights.map((highlight, index) => (
              <li key={index.toString()}>{highlight}</li>
            ))}
          </ul>
        </Box>
      </Flex>
    </Box>
  )
}
