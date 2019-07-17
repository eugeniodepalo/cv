import { Fragment, FunctionComponent } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { lighten } from 'polished'
import { Position, TeamSize } from '~/cv/data/positions'
import { BadgeList } from '~/components'

interface Props {
  position: Position
}

interface InfoItemProps {
  label: string
  value?: string
}

const Title = styled.h1`
  font-size: 1.5rem;
`

const Info = styled.dl`
  display: grid;
  column-gap: 1rem;
  row-gap: 0.25rem;
  grid-template-columns: max-content 1fr;
`

const Label = styled.div`
  background-color: ${(props) => lighten(0.7, props.theme.primaryColor)};
`

const Description = styled.strong`
  font-weight: bold;
`

const InfoItem: FunctionComponent<InfoItemProps> = ({ label, value, children }) => (
  <Fragment>
    <dt>
      <Label>
        <Box p={1}>{label}</Box>
      </Label>
    </dt>
    <dd>{value !== undefined ? value : children}</dd>
  </Fragment>
)

const teamSizeToString = (teamSize: TeamSize): string => {
  switch (teamSize) {
    case TeamSize.Small:
      return 'Small (1-3 people)'
    case TeamSize.Medium:
      return 'Medium (3-6 people)'
    case TeamSize.Large:
      return 'Large (7+ people)'
    default:
      return teamSize
  }
}

const PositionItem: FunctionComponent<Props> = ({ position }: Props) => {
  const duration = moment.duration(position.endDate.diff(position.startDate)).humanize()

  return (
    <Box as="article" mb={4}>
      <Box mb={3}>
        <Title>{position.name}</Title>
      </Box>
      <Flex flexWrap="wrap">
        <Box width={[1, 1, 4 / 12]} mb={[3, 0]}>
          <Info>
            <InfoItem label="Duration" value={duration} />
            <InfoItem label="Role" value={position.role} />
            <InfoItem label="Team Size" value={teamSizeToString(position.teamSize)} />
            <InfoItem label="Techs">
              <BadgeList values={position.techs} />
            </InfoItem>
            <InfoItem label="Process">
              <BadgeList values={position.process} />
            </InfoItem>
          </Info>
        </Box>
        <Box width={[1, 1, 8 / 12]}>
          <Box mb={3}>
            <Description>{position.description}</Description>
          </Box>
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

export default PositionItem
