import React from 'react'
import {
  Box,
  Grid,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import AsideToolbox from '../../components/aside-toolbox'
import ProductCard from '../../components/product-card'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const router = useRouter()
  const { gender } = router.query

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
            {Array.from({ length: 89 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </Grid>
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
