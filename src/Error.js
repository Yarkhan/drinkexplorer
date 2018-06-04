import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'native-base'

export default props => (
  <View>
    <Text>
      Oops. Error loading data. Make sure you are connected
      to the internet.
    </Text>
    <Button onPress={props.loadItems}>
      <Text>Try Again</Text>
    </Button>
  </View>
)
