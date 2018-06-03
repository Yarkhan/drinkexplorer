import React from 'react'
import { View } from 'react-native'
import { Text, Button, List, Content, ListItem, Left, Right, Icon, Spinner, Body, Thumbnail} from 'native-base'

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

class DrinkThumbnail extends React.Component {
  state = {loaded: false}
  render () {
    return (
      <View>
        <Thumbnail square
          source={{uri: this.props.uri, cache: 'force-cache'}}
          onLoad={() => this.setState({loaded: true})}
          style={{
            width: (this.state.loaded && 40) || 0,
            height: (this.state.loaded && 40) || 0,
          }}
        />
        {!this.state.loaded && <Spinner style={{width: 40, height: 40}} />}
      </View>
    )
  }
}
export default props => {
  if (props.error) return <Error loadItems={props.loadItems} />
  if (!props.items.length) return <Spinner />
  return (
    <Content>
      <List>
        {props.items.map(item => (
          <ListItem button onPress={() => console.log('clicked on', item)} key={item.id}>
            <DrinkThumbnail uri={item.thumbnail} />
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </ListItem>
        ))}
      </List>
    </Content>
  )
}
