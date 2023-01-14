import { StarIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  VStack
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Box px={3}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={'stretch'}
        gap={{ base: 5, md: 0 }}
        mb={10}
      >
        <VStack flex={1} alignItems={'flex-start'}>
          <Heading as={'h2'} size={'md'}>
            brand
          </Heading>
          <Heading as={'h1'}>Title</Heading>
          <Text as={'p'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptatibus quae voluptatem quas
            necessitatibus voluptatum quibusdam quidem quos. Quisquam, quae
            voluptatem. Quisquam, quae voluptatem. Quisquam, quae voluptatem.
          </Text>
          <Select placeholder="Votre taille">
            <option value="36">36</option>
            <option value="38">38</option>
            <option value="40">40</option>
            <option value="42">42</option>
            <option value="44">44</option>
            <option value="46">46</option>
            <option value="48">48</option>
          </Select>
          <Link>Guide des tailles</Link>
          <HStack>
            <Button colorScheme={'red'} variant="solid">
              Ajouter au panier
            </Button>
            <Button colorScheme={'red'} variant="outline">
              <StarIcon />
            </Button>
          </HStack>
        </VStack>
        <Flex
          flex={1}
          flexDir={'column'}
          alignItems={{ base: 'center', md: 'flex-end' }}
        >
          <Image src={'/images/hoodie.webp'} alt={'hoodie'} w={'300px'} />
          <HStack fontWeight={'bold'}>
            <Text>Avis (3)</Text>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </HStack>
        </Flex>
      </Flex>
      <HStack>
        <Box>
          <Heading as={'h2'} size={'md'}>
            Description
          </Heading>
        </Box>
      </HStack>
    </Box>
  )
}

export default Page
