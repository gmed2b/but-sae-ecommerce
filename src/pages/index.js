import { Box, Card, CardBody, Grid, Heading } from '@chakra-ui/react'
import NewProduct from '../components/new-product'
import ProductCard from '../components/product-card'
import Promotions from '../components/promotions'

const Page = () => {
  return (
    <Box>
      <Box as="section" mb={16}>
        <Promotions />
      </Box>

      <Box position={'relative'} as="section" py={10} mb={16}>
        <NewProduct />
      </Box>

      <Box as="section" mb={16}>
        <Box>
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
            <ProductCard />
            <ProductCard promotion={{ amount: '37' }} />
            <ProductCard />
            <ProductCard isNew />
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Page
