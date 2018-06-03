import React from 'react'
import { View } from 'react-native'
import { Text, Button, List, Content, ListItem, Left, Right, Icon, Spinner, Body, Thumbnail} from 'native-base'
import SpinnerThumbnail from '../SpinnerThumbnail'
const Error = props => (
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

export default props => {
  if (props.error) return <Error loadItems={props.loadItems} />
  if (!props.item) return <Spinner />
  return (
    <Content>
      <SpinnerThumbnail uri={props.item.thumbnail} />
      <Body>
        <Text>{props.item.name}</Text>
        <Text>{JSON.stringify(props.item)}</Text>
      </Body>
    </Content>
  )
}
