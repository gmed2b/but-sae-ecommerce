import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={'teal.300'} p={3} align="center">
        I'd would like to be a fullstack developer and build things for the
        mobile & web. Enjoy!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant={'page-title'}>
            Mehdi Ghoulam
          </Heading>
          <p>MMI student at Corte (Corsica, France)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
