import {
  Badge,
  Box,
  Heading,
  HStack,
  Img,
  Skeleton,
  Text,
  VStack
} from '@chakra-ui/react'

const ProductCard = props => {
  const { isNew, promotion, product } = props
  if (product === undefined)
    return <Skeleton h={'300px'} w={'100%'} speed={10} />

  return (
    <Box>
      <Box position={'relative'}>
        <Img src={'/images/hoodie.webp'} boxSize={'300px'} />
        {isNew && (
          <Badge
            position={'absolute'}
            top={2}
            colorScheme="green"
            fontSize={'1rem'}
          >
            NEW
          </Badge>
        )}
        {promotion && (
          <Badge
            position={'absolute'}
            top={2}
            right={2}
            colorScheme="red"
            fontSize={'1rem'}
          >
            PROMO
          </Badge>
        )}
      </Box>
      <VStack align={'flex-start'} mt={5}>
        <Heading as={'h1'} size={'md'}>
          {product.title}
        </Heading>
        <Text fontSize={'md'} noOfLines={1}>
          {product.description}
        </Text>
        <HStack>
          <Text fontSize={'md'} fontWeight={'bold'}>
            {promotion
              ? `${(
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)} €`
              : `${product.price} €`}
          </Text>
          {promotion && (
            <HStack>
              <Text fontSize={'md'} textDecoration={'line-through'}>
                {product.price} €
              </Text>
              <Badge colorScheme="red" variant={'outline'}>
                {product.discountPercentage} %
              </Badge>
            </HStack>
          )}
        </HStack>
      </VStack>
    </Box>
  )
}

export default ProductCard
