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

export default ({ project }: any) => (
  <Box as="article" mb={4}>
    <Flex alignItems="center">
      <Box mr={3}>
        <Link href={project.websiteUrl}>
          <Title>
            <Flex alignItems="center">
              <Box as="img" mr={1} src={project.iconUrl}></Box>
              <Box>{project.name}</Box>
            </Flex>
          </Title>
        </Link>
      </Box>
      <Box>
        {project.description}
        <Box mt={1}>
          Built with <BadgeList values={project.techs} />
        </Box>
      </Box>
    </Flex>
  </Box>
)
