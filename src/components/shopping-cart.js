import React from 'react'
import NextLink from 'next/link'
import { CloseIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack
} from '@chakra-ui/react'

const CartItem = props => {
  const { item } = props

  return (
    <HStack justify={'space-between'} px={4} w={'full'}>
      <Text noOfLines={1}>{item.name}</Text>
      <HStack ps={20}>
        <NumberInput defaultValue={item.quantity} min={1} max={50} w={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <IconButton icon={<CloseIcon />} variant="ghost" />
      </HStack>
    </HStack>
  )
}

const ShoppingCart = () => {
  const [cartItemList, setCartItemList] = React.useState(DATA)
  const [totalPrice, setTotalPrice] = React.useState(
    cartItemList.reduce((acc, current) => {
      return acc + current.quantity * current.price
    }, 0)
  )

  return (
    <Menu>
      <Box position={'relative'}>
        <MenuButton
          as={IconButton}
          icon={<Image src="/images/basket.svg" width={22} height={22} />}
          variant="ghost"
          aria-label="Options"
        />
        <Badge
          colorScheme={'red'}
          borderRadius={'full'}
          fontSize={'.9em'}
          position={'absolute'}
          right={-2}
          top={-2}
        >
          3
        </Badge>
      </Box>
      <MenuList>
        <HStack justify={'space-between'} p={4}>
          <Heading as={'h3'} size={'md'}>
            Mon panier
          </Heading>
          <Text>{totalPrice} €</Text>
        </HStack>
        <Divider />
        <VStack py={2}>
          {cartItemList.map((item, idx) => (
            <CartItem item={item} key={idx} />
          ))}
        </VStack>
        <Center>
          <NextLink href="/cart">
            <Button
              variant="ghost"
              size="sm"
              colorScheme="blue"
              mt={2}
              w={'full'}
            >
              Voir mon panier
            </Button>
          </NextLink>
        </Center>
      </MenuList>
    </Menu>
  )
}

export default ShoppingCart

const DATA = [
  {
    id: 1,
    name: 'JAOEL RAMI HUEGS FLOE',
    price: 10,
    quantity: 2
  },
  {
    id: 2,
    name: 'LOREM IPSUM DOLOR',
    price: 20,
    quantity: 2
  },
  {
    id: 3,
    name: 'EFNAR PRADO',
    price: 30,
    quantity: 1
  }
]
