import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'
import { Link } from '~/components'
import { info } from '../../cv/data'

const Header = styled.header<any>`
  border-bottom: ${(props) => (!props.isSticky ? `1px dashed ${props.theme.primaryColor};` : '0')};
`

const Picture = styled.img`
  border: 2px dashed ${(props) => props.theme.primaryColor};
`

const Title = styled.h1`
  font-size: 2rem;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
`

export default ({ isSticky }: any) => (
  <Header isSticky={isSticky}>
    <Flex mb={!isSticky ? 3 : 0}>
      {!isSticky && (
        <Box width={[2 / 12]} mr={4}>
          <Picture src={info.profilePictureUrl} width="100%" />
        </Box>
      )}
      <Box flex="1 1 auto">
        <Flex>
          <Box flex="1 1 auto">
            <Box mb={2}>
              <Title>{info.fullName}</Title>
            </Box>
            <Box mb={isSticky ? 0 : 3}>
              <Subtitle>{info.jobTitle}</Subtitle>
            </Box>
          </Box>
          <Box>
            <Flex alignItems="end">
              <Link href={`mailto:${info.email}`}>Email</Link>
              <Link href={`https://github.com/${info.githubHandle}`} target="_blank">
                GitHub
              </Link>
              <Link href={`https://linkedin.com/in/${info.linkedinHandle}`} target="_blank">
                LinkedIn
              </Link>
            </Flex>
          </Box>
        </Flex>
        {!isSticky && (
          <Box>
            {info.traits.map((t, i) => (
              <p key={i.toString()}>{t}</p>
            ))}
            <p>{info.status}</p>
          </Box>
        )}
      </Box>
    </Flex>
  </Header>
)
