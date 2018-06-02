import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Text, Button, Spinner, List, ListItem, Left, Right, Icon } from 'native-base'
import AppHeader from './AppHeader'
import Categories from './Categories/CategoriesContainer'
export default class App extends Component {
  render () {
    return (
      <Container>
        <AppHeader />
        <Content>
          <Categories />
        </Content>
      </Container>
    )
  }
}
