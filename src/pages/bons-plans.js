import { Box, Heading } from '@chakra-ui/react'
import BonsPlans from '../components/bons-plans'

const Page = () => {
  return (
    <Box px={3}>
      <Heading as="h1" size="2xl" mb={3}>
        Nos Bons plans
      </Heading>
      <BonsPlans heading={false} />
    </Box>
  )
}

export default Page
