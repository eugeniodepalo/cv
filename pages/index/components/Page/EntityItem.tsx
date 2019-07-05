// interface Project {
//   name: string
//   description: string
//   techs: string[]
// }

import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'
import { Link, BadgeList } from '~/components'

const Title = styled.h1`
  font-size: 1.25rem;
`

export default ({ entity }: any) => (
  <Box as="article" mb={4}>
    <Flex alignItems="center">
      <Box mr={3}>
        <Link href={entity.websiteUrl}>
          <Title>
            <Flex alignItems="center">
              {entity.iconUrl && <Box as="img" mr={1} src={entity.iconUrl}></Box>}
              <Box>{entity.name}</Box>
            </Flex>
          </Title>
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
