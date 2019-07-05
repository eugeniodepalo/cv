// interface Project {
//   name: string
//   description: string
//   techs: string[]
// }

import { Box, Flex } from '@rebass/grid'
import { Link, BadgeList } from '~/components'

export default ({ entity }: any) => (
  <Box as="article" mb={4}>
    <Flex alignItems="center">
      <Box mr={3}>
        <Link href={entity.websiteUrl}>
          <h1>
            <Flex alignItems="center">
              {entity.iconUrl && <Box as="img" mr={1} src={entity.iconUrl}></Box>}
              <Box>{entity.name}</Box>
            </Flex>
          </h1>
        </Link>
      </Box>
      <Box>
        {entity.description}
        <Box mt={1}>
          <BadgeList values={entity.techs} />
        </Box>
      </Box>
    </Flex>
  </Box>
)
