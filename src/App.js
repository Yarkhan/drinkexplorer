import React, { Component } from 'react'
import { View } from 'react-native'
import Categories from './Categories/CategoriesContainer'
import { Router, Stack, Scene } from 'react-native-router-flux'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Stack key='root' hideNavBar>
          <Scene key='categories' component={Categories} />
        </Stack>
      </Router>
    )
  }
}
