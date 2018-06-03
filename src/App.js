import React, { Component } from 'react'
import Categories from './Categories/CategoriesContainer'
import Drinks from './Drinks/DrinksContainer'
import Drink from './Drink/DrinkContainer'
import { Router, Stack, Scene } from 'react-native-router-flux'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Stack key='root' hideNavBar>
          <Scene key='categories' component={Categories} />
          <Scene key='drinks' component={Drinks} />
          <Scene key='drink' component={Drink} />
        </Stack>
      </Router>
    )
  }
}
