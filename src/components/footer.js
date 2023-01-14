import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack
} from '@chakra-ui/react'
import Logo from './logo'
import NavLinkItem from './nav-link-item'
import ThemeToggleButton from './theme-toggle-button'

const Footer = props => {
  return (
    <VStack
      as="footer"
      bg={'red.500'}
      mt={'auto'}
      textAlign="center"
      py={5}
      gap={5}
    >
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        align="stretch"
        justify="space-evenly"
        gap={10}
      >
        <Box>
          <Center
            as="h2"
            fontSize="lg"
            fontWeight="bold"
            mb={3}
            color={'white'}
          >
            Découvrir
          </Center>
          <List spacing={2}>
            <ListItem>
              <Menu>
                <MenuButton m={0} marginInline={0} px={2}>
                  <Text
                    color={'gray.50'}
                    textDecoration={
                      props.path.includes('/t-shirts') ? 'underline' : 'none'
                    }
                  >
                    Nos T-Shirts
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NavLinkItem href="/t-shirts/homme" path={props.path}>
                      Homme
                    </NavLinkItem>
                  </MenuItem>
                  <MenuItem>
                    <NavLinkItem href="/t-shirts/femme" path={props.path}>
                      Femme
                    </NavLinkItem>
                  </MenuItem>
                  <MenuItem>
                    <NavLinkItem href="/t-shirts/enfant" path={props.path}>
                      Enfant
                    </NavLinkItem>
                  </MenuItem>
                </MenuList>
              </Menu>
            </ListItem>
            <ListItem>
              <NavLinkItem footer href="/bons-plans" path={props.path}>
                Nos bons plans
              </NavLinkItem>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Center
            as="h2"
            fontSize="lg"
            fontWeight="bold"
            mb={3}
            color={'white'}
          >
            Support
          </Center>
          <List spacing={2}>
            <ListItem>
              <NavLinkItem footer href="/aide" path={props.path}>
                Aide
              </NavLinkItem>
            </ListItem>
            <ListItem>
              <NavLinkItem footer href="/faq" path={props.path}>
                F.A.Q.
              </NavLinkItem>
            </ListItem>
            <ListItem>
              <NavLinkItem footer href="/mentions-legales" path={props.path}>
                Mentions Légales
              </NavLinkItem>
            </ListItem>
            <ListItem>
              <NavLinkItem footer href="/contact" path={props.path}>
                Contact
              </NavLinkItem>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Center
            as="h2"
            fontSize="lg"
            fontWeight="bold"
            mb={3}
            color={'white'}
          >
            Restez à l&apos;affût !
          </Center>
          <Text fontSize="sm" color={'white'}>
            Inscrivez-vous à notre newsletter pour être <br /> informé de nos
            promotions.
          </Text>
          <VStack as={'form'}>
            <Input
              w={'xs'}
              ps={3}
              variant={'flushed'}
              color={'gray.50'}
              placeholder="Votre adresse email"
              _placeholder={{ color: 'red.100' }}
              _focus={{ borderColor: 'red.100' }}
              borderColor={'red.100'}
            />
            <Button variant={'solid'} colorScheme="red" mt={3}>
              S&apos;inscrire
            </Button>
          </VStack>
        </Box>
      </Flex>
      <HStack justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
        <HStack>
          <Logo color={'white'} />
          <HStack>
            <ThemeToggleButton />
          </HStack>
        </HStack>
        <Box as="p" fontSize="sm" mt={5} color={'white'}>
          &copy; {new Date().getFullYear()} - Mehdi Ghoulam
        </Box>
      </HStack>
    </VStack>
  )
}

export default Footer
