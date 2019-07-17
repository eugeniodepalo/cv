import { Box, Flex } from '@rebass/grid'
import { Link, BadgeList } from '~/components'
import { FunctionComponent } from 'react'
import { Project } from '~/cv/data/projects'
import { FetchedRepo } from '~/api'

interface Props {
  entity: Project | FetchedRepo
}

const LinkableItem: FunctionComponent<Props> = ({ entity }) => (
  <Box as="article" mb={4}>
    <Flex alignItems="center">
      <Box mr={3}>
        <Link href={entity.websiteUrl}>
          <h1>
            <Flex alignItems="center">
              {'iconUrl' in entity && entity.iconUrl && <Box as="img" mr={1} src={entity.iconUrl} />}
              <Box>{entity.name}</Box>
            </Flex>
          </h1>
        </Link>
      </Box>
      <Box>
        <div>{entity.description}</div>
        <Box mt={1}>
          <BadgeList values={entity.techs} />
        </Box>
      </Box>
    </Flex>
  </Box>
)

export default LinkableItem
