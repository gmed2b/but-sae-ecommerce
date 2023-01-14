import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  VStack
} from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <VStack align={'start'}>
      <Heading size="lg">Rechercher</Heading>
      <Divider mb={4} borderWidth={1} borderColor={'gray.500'} />
      <HStack>
        <Input
          placeholder="Rechercher"
          _focus={{
            borderColor: 'fireRed'
          }}
          _focusVisible={{
            borderColor: 'fireRed'
          }}
        />
        <Button bgColor={'fireRed'} color={'white'} size="sm" mt={2}>
          <SearchIcon />
        </Button>
      </HStack>
    </VStack>
  )
}

export default SearchBar
