import NextLink from 'next/link'
import { Heading } from '@chakra-ui/react'

const Logo = props => (
  <NextLink href={'/'} passHref>
    <Heading
      as="h1"
      size="lg"
      letterSpacing={'tighter'}
      pe={2}
      {...props}
      cursor={'pointer'}
    >
      Birbone
    </Heading>
  </NextLink>
)

export default Logo
