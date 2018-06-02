import React from 'react'
import { View } from 'react-native'
import { Text, Button, List, ListItem, Left, Right, Icon, Spinner } from 'native-base'

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
    <List>
      {props.items.map(item => (
        <ListItem button onPress={() => console.log('clicked on', item)} key={item}>
          <Left><Text>{item}</Text></Left>
          <Right><Icon name='arrow-forward' /></Right>
        </ListItem>
      ))}
    </List>
  )
}
