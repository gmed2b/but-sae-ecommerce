import {
  Badge,
  Box,
  Button,
  HStack,
  Skeleton,
  Text,
  VStack
} from '@chakra-ui/react'

const ProductCard = props => {
  return (
    <Box>
      <Box position={'relative'}>
        <Skeleton h={'300px'} w={'100%'} speed={10} />
        {props.isNew && (
          <Badge
            position={'absolute'}
            top={2}
            left={2}
            colorScheme="green"
            fontSize={'1rem'}
          >
            NEW
          </Badge>
        )}
        {props.promotion && (
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
        <Text fontSize={'smaller'}>JAOEL RAMI - HUEGS FLOE </Text>
        <Text fontSize={'sm'} noOfLines={1}>
          JAOEL RAMI HUEGS FLOE AIEH EFNAR PRDO
        </Text>
        <HStack>
          <Text fontSize={'md'} fontWeight={'bold'}>
            {props.promotion ? '€ 155.99' : '€ 249.99'}
            {/* promotion.price || article.price */}
          </Text>
          {props.promotion?.amount && (
            <HStack>
              <Text fontSize={'md'} textDecoration={'line-through'}>
                € 249.99
                {/* article.price */}
              </Text>
              <Badge colorScheme="red" variant={'outline'}>
                {props.promotion.amount} %
              </Badge>
            </HStack>
          )}
        </HStack>
      </VStack>
    </Box>
  )
}

export default ProductCard
