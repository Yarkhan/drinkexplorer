import React from 'react'
import { View } from 'react-native'
import { Text, Button, List, Content, ListItem, Left, Right, Icon, Spinner, Body} from 'native-base'
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
  if (!props.items.length) return <Spinner />
  return (
    <Content>
      <List>
        {props.items.map(item => (
          <ListItem button onPress={() => props.onSelect(item)} key={item.id}>
            <SpinnerThumbnail uri={item.thumbnail} />
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </ListItem>
        ))}
      </List>
    </Content>
  )
}
