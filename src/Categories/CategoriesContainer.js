import React, { Component } from 'react'
import Categories from './Categories'
import { categories } from '../cocktail-api'
import { Actions } from 'react-native-router-flux'
import { View } from 'react-native'
import { Container } from 'native-base'
import AppHeader from '../AppHeader'

export default class CategoriesContainer extends Component {
  state = {
    items: [],
    error: false
  }
  componentDidMount () {
    this.loadItems()
  }
  async loadItems () {
    this.setState({error: false})
    const items = await categories()
    if (items) this.setState({items})
    if (!items) this.setState({error: true})
  }
  render () {
    return (
      <Container>
        <AppHeader />
        <Categories
          items={this.state.items}
          error={this.state.error}
          loadItems={this.loadItems.bind(this)}
          onSelect={category => Actions.drinks({category})}
        />
      </Container>
    )
  }
}
