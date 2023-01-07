import {
  Box,
  Heading,
  Flex,
  HStack,
  Button,
  Text,
  Skeleton,
  Card,
  Badge
} from '@chakra-ui/react'

const NewProduct = () => {
  return (
    <Card p={5}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={5}>
        <Box>
          <Heading as={'h3'} size={'sm'} mb={10} color={'gray.500'}>
            NOUVEAUTES
          </Heading>
          <Heading as={'h1'} size={'2xl'} mb={2}>
            Lorem ipsum
          </Heading>
          <Text fontSize={'xl'} mb={2} color={'gray.700'}>
            LOREM IPSUM DOLOR SIT AMET
          </Text>
          <Text fontSize={'sm'}>
            LOREM IPSUM DOLOR SIT AMET VICIT CONSECTEJUR ARIBE APENRI KAEENA
            ANAVOA KEOEN VERIFI DIME ATSAT OPCNAEIA NEPANCA HAIDA OEEH <br />
            HAOE? LOGNC IAPO RAIF
          </Text>
          <HStack mt={10}>
            <Button colorScheme={'red'}>Voir plus</Button>
            <Button colorScheme={'red'} variant="outline">
              Ajouter au panier
            </Button>
          </HStack>
        </Box>
        <Box position={'relative'} w={'lg'}>
          <Skeleton h={'300px'} speed={30} />
          <Badge
            position={'absolute'}
            top={2}
            left={2}
            colorScheme="green"
            fontSize={'1rem'}
          >
            NEW
          </Badge>
        </Box>
      </Flex>
    </Card>
  )
}

export default NewProduct
