import React from 'react'
import { View, FlatList} from 'react-native'
import { Text, Button, List, Container, Content, ListItem, Left, Right, Icon, Spinner } from 'native-base'
import Error from '../Error'

export default props => {
  if (props.error) return <Error loadItems={props.loadItems} />
  if (!props.items.length) return <Spinner />
  return (
    <Content>
      <FlatList
        data={props.items}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <ListItem button onPress={e => props.onSelect(item)} key={item}>
            <Left><Text>{item}</Text></Left>
            <Right><Icon name='arrow-forward' /></Right>
          </ListItem>
        )}
      />
    </Content>
  )
}
