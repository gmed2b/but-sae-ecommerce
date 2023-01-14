import React, { useEffect } from 'react'
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
  useDisclosure,
  VStack,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import SearchBar from '../../../components/search-bar'
import AsideToolbox from '../../../components/aside-toolbox'
import ProductCard from '../../../components/product-card'
import Pagination, { paginate } from '../../../components/pagination'
import Loading from '../../../components/loading'
import NextLink from 'next/link'

const GENDER = ['homme', 'femme', 'enfant']

const Page = () => {
  const linkColor = useColorModeValue('black', 'white')
  const router = useRouter()
  const { gender } = router.query

  useEffect(() => {
    if (!GENDER.includes(gender)) {
      router.push('/t-shirts/homme')
    }
  }, [gender, router])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const selectionData = useDataLoader('selection-data', async () => {
    const response = await fetch(
      'https://dummyjson.com/products/category/mens-shirts?limit=4'
    )
    return await response.json()
  })

  const [currentPage, setCurrentPage] = React.useState(1)
  const pageSize = 10
  const paginatedData = paginate(
    selectionData.isSuccess ? selectionData.data.products : [],
    currentPage,
    pageSize
  )

  if (selectionData.isLoading && !selectionData.data) {
    return <Loading />
  }
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
        <VStack
          display={{ base: 'none', md: 'flex' }}
          alignItems={'stretch'}
          gap={10}
        >
          <SearchBar />
          <AsideToolbox />
        </VStack>
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
              <NextLink href={`${gender}/${item.id}`} key={index}>
                <Link color={linkColor}>
                  <ProductCard product={item} name={item.name} />
                </Link>
              </NextLink>
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
        size="md"
        position="fixed"
        bottom={5}
        right={5}
        width="50px"
        height="50px"
        borderRadius="30%"
        backgroundColor="fireRed"
        color="white"
        zIndex={10}
      >
        <Search2Icon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
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
