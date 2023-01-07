import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" h={'100%'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>E-Commerce | Birbone</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" pt={'24'} minH={'100%'} h={'auto'}>
        {children}
      </Container>

      <Footer path={router.asPath} />
    </Box>
  )
}

export default Main
