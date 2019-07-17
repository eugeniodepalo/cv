import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'
import { Hide } from '@rebass/hide'
import { Link } from '~/components'
import { info } from '~/cv/data'
import { FunctionComponent } from 'react'

interface Props {
  isSticky: boolean
}

const Content = styled.header<Props>`
  border-bottom: ${(props) => (props.isSticky ? '0' : `1px dashed ${props.theme.primaryColor};`)};
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

const Header: FunctionComponent<Props> = ({ isSticky }) => (
  <Content isSticky={isSticky}>
    <Flex mb={isSticky ? 0 : 3}>
      {!isSticky && (
        <Hide xsmall small width={[2 / 12]} mr={4}>
          <Picture src={info.profilePictureUrl} width="100%" />
        </Hide>
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
            <nav>
              <Flex alignItems="end" as="ul">
                <li>
                  <Link href={`mailto:${info.email}`}>Email</Link>
                </li>
                <li>
                  <Link href={`https://github.com/${info.githubHandle}`} target="_blank">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href={`https://linkedin.com/in/${info.linkedinHandle}`} target="_blank">
                    LinkedIn
                  </Link>
                </li>
              </Flex>
            </nav>
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
  </Content>
)

export default Header
