import React, { Component } from 'react'
import { View } from 'react-native'
import Categories from './Categories/CategoriesContainer'
import Drinks from './Drinks/DrinksContainer'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { Container } from 'native-base'
export default class App extends Component {
  render () {
    return (
      <Router>
        <Stack key='root' hideNavBar>
          <Scene key='categories' component={Categories} />
          <Scene key='drinks' component={Drinks} />
        </Stack>
      </Router>
    )
  }
}
