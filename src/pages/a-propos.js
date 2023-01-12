import { Box, Heading, Flex, Text } from '@chakra-ui/react'

const Page = () => {
  return (
    <Box>
      <Heading as={'h1'} size={'2xl'} mb={10}>
        A propos
      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} gap={5}>
        <Box>
          <Text fontSize={'xl'} mb={2} color={'gray.700'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et
            lacinia nisl lorem eget nisl. Sed tincidunt, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, et lacinia nisl lorem eget nisl.
            Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
            nisl, et lacinia nisl lorem eget nisl.
          </Text>
          <Text fontSize={'xl'} mb={2} color={'gray.700'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et
            lacinia nisl lorem eget nisl. Sed tincidunt, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, et lacinia nisl lorem eget nisl.
            Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
            nisl, et lacinia nisl lorem eget nisl.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Page
