import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Img,
  Skeleton,
  SkeletonText,
  VStack
} from '@chakra-ui/react'
import { useDataLoader } from '@scaleway/use-dataloader'
import NewProduct from '../components/new-product'
import ProductCard from '../components/product-card'

const Page = () => {
  const selectionData = useDataLoader('selection-data', async () => {
    const response = await fetch('https://dummyjson.com/products/category/tops')
    return await response.json()
  })
  const newProductData = useDataLoader('new-product-data', async () => {
    const response = await fetch(
      'https://dummyjson.com/products/category/mens-shirts?limit=1&skip=1'
    )
    return await response.json()
  })
  const requests = [selectionData, newProductData]

  // check if all the requests are loading
  if (
    requests.every(request => request.isLoading) &&
    requests.every(request => !request.data)
  ) {
    return (
      <Box as="section" h={'100vh'}>
        <Center fontSize={'xl'}>Loading...</Center>
      </Box>
    )
  }

  // Will be false when the promise is rejected
  if (requests.some(request => request.isError)) {
    // Will display the error in the the div
    return requests.map(request => request.error)
  }

  if (requests.some(request => !request.isSuccess)) {
    return <div>Something went wrong</div>
  } else {
    for (let i = 0; i < 3; i++) {
      selectionData.data.products.push(selectionData.data.products[i])
    }
  }

  return (
    <>
      <Box as="section" mb={16}>
        <Grid
          h={{ base: '800px', lg: '600px' }}
          templateRows={{ base: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }}
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
          overflow="hidden"
          gap={1}
        >
          <GridItem colSpan={{ base: 1, lg: 3 }} h={'100%'}>
            <Skeleton isLoaded={!selectionData.isLoading}>
              <Img src={'/images/jogger.webp'} />
            </Skeleton>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }} h={'100%'}>
            <Skeleton isLoaded={!selectionData.isLoading}>
              <Img src={'/images/hoodie_big.webp'} />
            </Skeleton>
          </GridItem>
        </Grid>
      </Box>

      <Box as="section" mb={16}>
        <NewProduct product={newProductData.data.products[0]} />
      </Box>

      <Box as="section" mb={16}>
        <Heading as="h1" size="2xl" mb={3}>
          Notre sélection
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)'
          }}
          gap={4}
        >
          {selectionData.data.products.map((product, idx) => {
            let random = Math.floor(Math.random() * 3)
            const productItem =
              random === 0 ? (
                <ProductCard key={product.id} product={product} isNew />
              ) : random === 1 ? (
                <ProductCard key={product.id} product={product} promotion />
              ) : (
                <ProductCard key={product.id} product={product} />
              )
            return (
              <VStack key={idx}>
                <Skeleton
                  w={'100%'}
                  h={'70%'}
                  isLoaded={!selectionData.isLoading}
                >
                  {productItem}
                </Skeleton>
                <SkeletonText
                  noOfLines={4}
                  spacing="4"
                  isLoaded={!selectionData.isLoading}
                />
              </VStack>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default Page
