import React, { Component } from 'react'
import { Container, Content, Text, List, ListItem, Left, Right, Icon } from 'native-base'
import AppHeader from './AppHeader'
import { categories } from './cocktail-api'
class Categories extends Component {
  render () {
    return (
      <List>
        {this.props.items.map(item => (
          <ListItem button onPress={() => console.log('clicked on', item)} key={item}>
            <Left><Text>{item}</Text></Left>
            <Right><Icon name='arrow-forward' /></Right>
          </ListItem>
        ))}
      </List>
    )
  }
}

class CategoriesContainer extends Component {
  state = {
    items: []
  }
  async componentDidMount () {
    const items = await categories()
    console.log(items)
    this.setState({items})
  }
  render () {
    return <Categories items={this.state.items} />
  }
}
export default class App extends Component {
  render () {
    return (
      <Container>
        <AppHeader />
        <Content>
          <CategoriesContainer />
        </Content>
      </Container>
    )
  }
}
