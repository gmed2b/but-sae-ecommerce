import { Grid, GridItem, Skeleton } from '@chakra-ui/react'

const Promotions = () => {
  return (
    <Grid
      h={{ base: '800px', lg: '600px' }}
      templateRows={{ base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
      gap={1}
    >
      <GridItem colSpan={{ base: 1, lg: 3 }}>
        <Skeleton w={'100%'} h={'100%'} speed={10} />
      </GridItem>
      <GridItem colSpan={{ base: 1, lg: 2 }}>
        <Skeleton w={'100%'} h={'100%'} speed={10} />
      </GridItem>
    </Grid>
  )
}

export default Promotions
