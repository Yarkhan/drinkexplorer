import React, { Component } from 'react'
import Drink from './Drink'
import { drink } from '../cocktail-api'
import { View } from 'react-native'
import AppHeader from '../AppHeader'
import { Container } from 'native-base'
export default class DrinkContainer extends Component {
  state = {
    item: null,
    error: false
  }
  componentDidMount () {
    this.loadItems()
  }
  async loadItems () {
    this.setState({error: false})
    const item = await drink(this.props.id)
    if (item) this.setState({item})
    if (!item) this.setState({error: true})
  }
  render () {
    return (
      <Container>
        <AppHeader />
        <Drink
          item={this.state.item}
          error={this.state.error}
          loadItems={this.loadItems.bind(this)}
        />
      </Container>
    )
  }
}
