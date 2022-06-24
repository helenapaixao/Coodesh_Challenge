import {Flex, Avatar} from '@chakra-ui/react'
import {Container} from './styles'

export function Header() {
  return (

    <Flex
      bgColor="blue.100"
      h={{ base: '60px', lg: '100px' }}
      alignItems="center"
      pl={{base: '30px', lg: '73px'}}
    >
      <h1>Company</h1>
      <Container>
       <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />{' '}
      </Container>
    </Flex>

  )
}