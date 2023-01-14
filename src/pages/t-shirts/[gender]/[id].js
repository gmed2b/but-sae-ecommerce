import { Icon, StarIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs'
import Loading from '../../../components/loading'
import { useDataLoader } from '@scaleway/use-dataloader'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Page = () => {
  const router = useRouter()
  const { id } = router.query

  const request = useDataLoader('tshirt', async () => {
    if (id === undefined) return Promise.resolve({})
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    return await response.json()
  })

  if (request.isLoading && !request.data) {
    return <Loading />
  }
  if (request.isError) {
    // Will display the error in the the div
    return request.map(request => request.error)
  }

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
            {request.data.brand}
          </Heading>
          <Heading as={'h1'}>{request.data.title}</Heading>
          <Text as={'p'} pb={10}>
            {request.data.description}
          </Text>
          <Select placeholder="Votre taille" w={'56'}>
            <option value="36">36</option>
            <option value="38">38</option>
            <option value="40">40</option>
            <option value="42">42</option>
            <option value="44">44</option>
            <option value="46">46</option>
            <option value="48">48</option>
          </Select>
          <Link pt={4}>Guide des tailles</Link>
          <HStack>
            <Button bgColor={'fireRed'} color={'white'} variant="solid">
              Ajouter au panier
            </Button>
            <Button colorScheme={'red'} variant="outline">
              <StarIcon />
            </Button>
          </HStack>
          <HStack fontWeight={'bold'}>
            <Text>Avis (3)</Text>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </HStack>
        </VStack>
        <Flex
          flex={1}
          flexDir={'column'}
          alignItems={{ base: 'center', md: 'flex-end' }}
        >
          <Image src={'/images/hoodie.webp'} alt={'hoodie'} w={'300px'} />
        </Flex>
      </Flex>

      <VStack alignItems={'stretch'} mb={10} mx={10}>
        <Heading as={'h2'} textAlign={'center'} size={'md'} mb={5}>
          Avis de la communauté
        </Heading>
        {Array.from({ length: 4 }).map((_, i) => (
          <Flex
            as="section"
            py={3}
            display={'flex'}
            flexDir={'row'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            gap={10}
            borderBottom={'1px'}
            borderColor={'gray.400'}
            key={i}
          >
            <VStack alignItems={'flex-start'}>
              <Text fontWeight={'bold'}>Anonymous</Text>
              <HStack pb={3}>
                <StarIcon color={'yellow.500'} />
                <StarIcon color={'yellow.500'} />
                <StarIcon color={'yellow.500'} />
                <StarIcon color={'gray.300'} />
                <StarIcon color={'gray.300'} />
              </HStack>
              <Text as={'p'} color={'gray.400'}>
                Posté le 12/12/2020
              </Text>
            </VStack>
            <Text as={'p'} w={'md'} textAlign={'justify'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut ultricies lacinia, nisl nisl aliquet nisl,
              sit amet aliquet nisl nisl sit amet nisl.
            </Text>
            <VStack alignSelf={'center'}>
              <Text fontWeight={'bold'}>
                <Button>
                  <Icon as={BsHandThumbsUp} boxSize={5} />
                </Button>
              </Text>
              <Text fontWeight={'bold'}>
                <Button>
                  <Icon as={BsHandThumbsDown} boxSize={5} />
                </Button>
              </Text>
            </VStack>
          </Flex>
        ))}
      </VStack>

      <VStack justifyContent={'center'} mb={8}>
        <VStack alignItems={'flex-start'}>
          <Text>Nom</Text>
          <Input placeholder="Nom" w={'md'} />
        </VStack>
        <VStack alignItems={'flex-start'}>
          <Text>Message</Text>
          <Textarea placeholder="Message" w={'md'} />
        </VStack>
        <Button bgColor={'fireRed'} color={'white'} variant="solid">
          Envoyer
        </Button>
      </VStack>
    </Box>
  )
}

export default Page
