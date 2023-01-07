import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  IconButton,
  Divider
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const CartItem = props => {
  const { item } = props

  return (
    <HStack justify="space-between" px={4} w="full">
      <Text noOfLines={1}>{item.name}</Text>
      <HStack>
        <Text color={'gray.500'} me={3}>
          {item.price} €
        </Text>
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

const CartPage = () => {
  const [cartItemList, setCartItemList] = React.useState(DATA)
  const [totalPrice, setTotalPrice] = React.useState(
    cartItemList.reduce((acc, current) => {
      return acc + current.quantity * current.price
    }, 0)
  )

  return (
    <VStack>
      <HStack justify={'space-between'} p={4} w="2xl">
        <Heading as="h1" size="lg">
          Mon panier
        </Heading>
        <Text fontSize={'xl'}>{totalPrice} €</Text>
      </HStack>
      <Divider />
      <VStack py={2} w={'2xl'}>
        {cartItemList.map((item, idx) => (
          <CartItem item={item} key={idx} />
        ))}
      </VStack>
      <Box p={4}>
        <NextLink href="/checkout">
          <Button variant="solid" size="lg" colorScheme="blue" w="full">
            Passer commande
          </Button>
        </NextLink>
      </Box>
    </VStack>
  )
}

export default CartPage

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
