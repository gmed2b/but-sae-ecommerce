import NextLink from 'next/link'
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import Logo from './logo'
import NavLinkItem from './nav-link-item'
import Image from 'next/image'
import ShoppingCart from './shopping-cart'

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(20px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.lg"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="center"
          flexWrap={'wrap'}
          gap={{ md: 1, lg: 4 }}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavLinkItem href="/" path={props.path}>
            Accueil
          </NavLinkItem>
          <Menu>
            <MenuButton m={0} marginInline={0} py={1} px={2}>
              <Text
                color={useColorModeValue('gray.700', 'gray.50')}
                textTransform="uppercase"
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
          <NavLinkItem href="/bons-plans" path={props.path}>
            Nos bons plans
          </NavLinkItem>
          <NavLinkItem href="/a-propos" path={props.path}>
            Qui sommes-nous ?
          </NavLinkItem>
        </Stack>

        <HStack>
          {/* ICONS */}
          <HStack gap={1}>
            <ShoppingCart />
            <NextLink
              href={'http://eco-back.gelk.studio/dashboard/auth?action=login'}
              passHref
            >
              <Button variant="ghost" size="sm">
                <Image
                  src="/images/person.svg"
                  alt="person icon"
                  width={22}
                  height={22}
                />
              </Button>
            </NextLink>
          </HStack>
          {/* MENU MOBILE */}
          <Box display={{ base: 'block', md: 'none' }} ms={2}>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href={'/'} passHref>
                    <MenuItem as={Link}>Accueil</MenuItem>
                  </NextLink>
                  <Divider />

                  <Text textAlign={'start'} ps={3} pt={1}>
                    Nos T-Shirts
                  </Text>
                  <List>
                    <ListItem>
                      <NextLink href={'/t-shirts/homme'} passHref>
                        <MenuItem as={Link} ps={5}>
                          Homme
                        </MenuItem>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href={'/t-shirts/femme'} passHref>
                        <MenuItem as={Link} ps={5}>
                          Femme
                        </MenuItem>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href={'/t-shirts/enfant'} passHref>
                        <MenuItem as={Link} ps={5}>
                          Enfant
                        </MenuItem>
                      </NextLink>
                    </ListItem>
                  </List>
                  <Divider />

                  <NextLink href={'/bons-plans'} passHref>
                    <MenuItem as={Link}>Nos bons plans</MenuItem>
                  </NextLink>
                  <Divider />

                  <NextLink href={'/a-propos'} passHref>
                    <MenuItem as={Link}>Qui sommes-nous ?</MenuItem>
                  </NextLink>
                  <Divider />

                  <Center mt={2}>
                    <ThemeToggleButton />
                  </Center>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Navbar
