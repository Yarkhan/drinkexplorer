import React from 'react'
import { View, FlatList } from 'react-native'
import { Text, Button, List, Content, ListItem, Left, Right, Icon, Spinner, Body} from 'native-base'
import SpinnerThumbnail from '../SpinnerThumbnail'
import Error from '../Error'

export default props => {
  if (props.error) return <Error loadItems={props.loadItems} />
  if (!props.items) return <Spinner />
  if (props.items.length === 0) return <Text>No results</Text>
  return (
    <Content>
      <FlatList
        data={props.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem button onPress={() => props.onSelect(item)} key={item.id}>
            <SpinnerThumbnail uri={item.thumbnail} />
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </ListItem>
        )}
      />
    </Content>
  )
}
