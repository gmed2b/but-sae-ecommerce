import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import Logo from './Logo'
import NavLinkItem from './nav-link-item'
import ThemeToggleButton from './theme-toggle-button'

const Footer = props => {
  return (
    <Box
      as="footer"
      bg={'red.500'}
      color={'gray.50'}
      flex={1}
      textAlign="center"
      py={10}
    >
      <HStack align="stretch" justify="center" gap={20}>
        <Box>
          <Logo />
          <HStack pt={3}>
            {/* Link to social media */}
            <ThemeToggleButton />
          </HStack>
        </Box>
        <Box>
          <Center as="h2" fontSize="lg" fontWeight="bold" mb={3}>
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
          <Center as="h2" fontSize="lg" fontWeight="bold" mb={3}>
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
          <Center as="h2" fontSize="lg" fontWeight="bold" mb={3}>
            Restez à l&apos;affût !
          </Center>
          <Text fontSize="sm">
            Inscrivez-vous à notre newsletter pour être informé de nos
            promotions.
          </Text>
          <Box as="form" mt={3}>
            <Input
              ps={3}
              variant={'flushed'}
              color={'gray.50'}
              borderColor={'red.200'}
              placeholder="Votre adresse email"
              _placeholder={{ color: 'red.100' }}
            />
            <Button colorScheme="red" mt={3}>
              S&apos;inscrire
            </Button>
          </Box>
        </Box>
      </HStack>
      <Box as="p" fontSize="sm" mt={5}>
        &copy; {new Date().getFullYear()} Birbone - Mehdi Ghoulam
      </Box>
    </Box>
  )
}

export default Footer
