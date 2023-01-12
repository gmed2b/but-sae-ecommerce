import React from 'react'
import { useDataLoader } from '@scaleway/use-dataloader'
import { useRouter } from 'next/router'
import {
  Box,
  Grid,
  Heading,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import AsideToolbox from '../../components/aside-toolbox'
import ProductCard from '../../components/product-card'
import Pagination, { paginate } from '../../components/pagination'

const Page = () => {
  const router = useRouter()
  const { gender } = router.query

  const selectionData = useDataLoader('selection-data', async () => {
    const response = await fetch(
      'https://dummyjson.com/products/category/mens-shirts?limit=4'
    )
    return await response.json()
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [currentPage, setCurrentPage] = React.useState(1)
  const pageSize = 10
  const paginatedData = paginate(
    selectionData.isSuccess ? selectionData.data.products : [],
    currentPage,
    pageSize
  )

  if (selectionData.isError) {
    // Will display the error in the the div
    return selectionData.map(request => request.error)
  }
  if (!selectionData.isSuccess) {
    return <div>Something went wrong</div>
  }

  const onPageChange = page => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <Box px={3} mb={16}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: '1.2fr 3fr',
          lg: '1.2fr 4fr'
        }}
        gap={10}
      >
        <Box display={{ base: 'none', md: 'block' }}>
          <AsideToolbox />
        </Box>
        <Box>
          <Heading as="h1" size="lg" mb={3}>
            T-shirts {gender}
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            }}
            gap={4}
          >
            {paginatedData.map((item, index) => (
              <ProductCard product={item} name={item.name} key={index} />
            ))}
          </Grid>
          <Pagination
            items={paginatedData.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </Box>
      </Grid>

      <Button
        display={{ base: 'flex', md: 'none' }}
        ref={btnRef}
        onClick={onOpen}
        size="lg"
        position="fixed"
        bottom={10}
        right={10}
        width="60px"
        height="60px"
        borderRadius="30%"
        colorScheme="red"
      >
        <Search2Icon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={10}>
            <AsideToolbox />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Page
