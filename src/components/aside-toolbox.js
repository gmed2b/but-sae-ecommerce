import React from 'react'
import {
  Text,
  Heading,
  Checkbox,
  Divider,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  List,
  ListItem,
  Button,
  HStack,
  Input
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const AsideToolbox = () => {
  const [priceMinValue, setPriceMinValue] = React.useState(20)
  const [priceMaxValue, setPriceMaxValue] = React.useState(299)

  return (
    <VStack spacing={12} align="stretch">
      <VStack align={'start'}>
        <Heading size="lg">Prix</Heading>
        <Divider mb={4} borderWidth={1} borderColor={'gray.500'} />
        <HStack w={'100%'} justify={'space-between'}>
          <Text>{priceMinValue} €</Text>
          <Text>{priceMaxValue} €</Text>
        </HStack>
        <RangeSlider
          min={20}
          max={299}
          value={[priceMinValue, priceMaxValue]}
          onChange={values => {
            setPriceMinValue(values[0])
            setPriceMaxValue(values[1])
          }}
          colorScheme={'red'}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </VStack>
      <VStack align={'start'}>
        <Heading size="lg">Taille</Heading>
        <Divider mb={4} borderWidth={1} borderColor={'gray.500'} />
        <List>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'} borderColor={'red.100'}>
              XS
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'} borderColor={'red.100'}>
              S
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'} borderColor={'red.100'}>
              M
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'} borderColor={'red.100'}>
              L
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'} borderColor={'red.100'}>
              XL
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'} borderColor={'red.100'}>
              XXL
            </Checkbox>
          </ListItem>
        </List>
      </VStack>
      <Button colorScheme={'red'}>Filtrer</Button>
    </VStack>
  )
}

export default AsideToolbox
