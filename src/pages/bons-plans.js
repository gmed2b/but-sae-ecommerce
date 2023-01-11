import React from 'react'
import { Box, Heading, VStack, SimpleGrid } from '@chakra-ui/react'
import ProductCard from '../components/product-card'
import Pagination, { paginate } from '../components/pagination'

const DATA = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  name: `Product ${index}`
}))

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const pageSize = 10
  const paginatedData = paginate(DATA, currentPage, pageSize)

  const onPageChange = page => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <Box px={3} py={10}>
      <Heading as="h1" size="2xl" mb={10}>
        Nos Bons plans
      </Heading>
      {/* <BonsPlans heading={false} /> */}
      <VStack align="flex-start">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={8}
          alignSelf="stretch"
        >
          {paginatedData.map((item, index) => (
            <ProductCard name={item.name} key={index} />
          ))}
        </SimpleGrid>
      </VStack>
      <Pagination
        items={DATA.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </Box>
  )
}

export default Page
