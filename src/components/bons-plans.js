import { Heading, VStack, SimpleGrid } from '@chakra-ui/react'

const BonsPlans = ({ number = 42, heading = true }) => {
  return (
    <VStack align="flex-start">
      {heading && (
        <Heading as={'h3'} size={'sm'} mb={10} color={'gray.500'}>
          NOS BONS PLANS
        </Heading>
      )}
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={8} alignSelf="stretch">
        {[...Array(number)].map((item, index) => (
          <ProductCard key={index} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default BonsPlans
