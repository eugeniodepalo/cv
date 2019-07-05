import { Position, TeamSize } from '../../cv/data/positions'
import { BadgeList } from '~/components'
import styled from 'styled-components'
import { Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import { lighten } from 'polished'
import * as moment from 'moment'

interface Props {
  position: Position
}

const Title = styled.h1`
  font-size: 1.5rem;
`

const DefinitionList = styled.dl`
  display: grid;
  column-gap: 1rem;
  row-gap: 0.25rem;
  grid-template-columns: max-content 1fr;
`

const Label = styled.div`
  background-color: ${(props) => lighten(0.7, props.theme.primaryColor)};
`

const DefinitionItem = ({ label, value, children }: any) => (
  <Fragment>
    <dt>
      <Label>
        <Box p={1}>{label}</Box>
      </Label>
    </dt>
    <dd>{value !== undefined ? value : children}</dd>
  </Fragment>
)

const teamSizeToString = (teamSize: TeamSize) => {
  switch (teamSize) {
    case TeamSize.Small:
      return 'Small (1-3 people)'
    case TeamSize.Medium:
      return 'Medium (3-6 people)'
    case TeamSize.Large:
      return 'Large (7+ people)'
  }
}

export default ({ position }: Props) => {
  const duration = moment.duration(position.endDate.diff(position.startDate)).humanize()

  return (
    <Box as="article" mb={4}>
      <Box mb={3}>
        <Title>{position.name}</Title>
      </Box>
      <Flex flexWrap="wrap">
        <Box width={[1, 1, 4 / 12]} mb={[3, 0]}>
          <DefinitionList>
            <DefinitionItem label="Duration" value={duration} />
            <DefinitionItem label="Role" value={position.role} />
            <DefinitionItem label="Team Size" value={teamSizeToString(position.teamSize)} />
            <DefinitionItem label="Techs">
              <BadgeList values={position.techs} />
            </DefinitionItem>
            <DefinitionItem label="Process">
              <BadgeList values={position.process} />
            </DefinitionItem>
          </DefinitionList>
        </Box>
        <Box width={[1, 1, 8 / 12]}>
          <Box mb={3}>{position.description}</Box>
          <ul>
            {position.highlights.map((highlight, index) => (
              <li key={index.toString()}>
                <Box mb={3}>{highlight}</Box>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    </Box>
  )
}
