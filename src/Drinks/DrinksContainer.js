import React, { Component } from 'react'
import Drinks from './Drinks'
import { category } from '../cocktail-api'
import { View } from 'react-native'
import AppHeader from '../AppHeader'
import { Container } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class DrinksContainer extends Component {
  state = {
    items: [],
    error: false
  }
  componentDidMount () {
    this.loadItems()
  }
  async loadItems () {
    this.setState({error: false})
    const items = await category(this.props.category)
    if (items) this.setState({items})
    if (!items) this.setState({error: true})
  }
  render () {
    return (
      <Container>
        <AppHeader />
        <Drinks
          items={this.state.items}
          error={this.state.error}
          loadItems={this.loadItems.bind(this)}
          onSelect={drink => Actions.drink({id: drink.id})}
        />
      </Container>
    )
  }
}
