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
  HStack
} from '@chakra-ui/react'

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
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg={'fireRed'} />
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
            <Checkbox size={'lg'} colorScheme={'red'}>
              XS
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'}>
              S
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'}>
              M
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'}>
              L
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'}>
              XL
            </Checkbox>
          </ListItem>
          <ListItem>
            <Checkbox size={'lg'} colorScheme={'red'}>
              XXL
            </Checkbox>
          </ListItem>
        </List>
      </VStack>
      <Button bgColor={'fireRed'} color={'white'}>
        Filtrer
      </Button>
    </VStack>
  )
}

export default AsideToolbox
