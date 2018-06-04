import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Header, Left, Button, Body, Right, Icon, Title, Item, Input, Text
} from 'native-base'
import { Actions } from 'react-native-router-flux'

class SearchBar extends Component {
  state = {
    search: ''
  }
  componentDidMount () {
    this.searchBar.focus()
  }
  search () {
    Actions.search({drink: this.state.search})
  }
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input autofocus placeholder="Search"
            ref={e => e && (this.searchBar = e._root)}
            onBlur={this.props.onBlur}
            onChangeText={text => this.setState({search: text})}
            onSubmitEditing={this.search.bind(this)}
            value={this.state.search}
          />
          {!this.state.search && (
            <Icon
              name="ios-close-outline"
              onPress={() => this.searchBar.blur()}
            />
          ) || (
            <Icon
              name="ios-arrow-forward"
              onPress={this.search.bind(this)}
            />
          )}
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    )
  }
}

class TitleBar extends Component {
  render () {
    return (
      <Header>
        <Left>
          <Button transparent disabled>
            <Icon name='ios-wine' />
          </Button>
        </Left>
        <Body>
          <Title>Drink Explorer</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.props.onPressRight}>
            <Icon name='ios-search' />
          </Button>
        </Right>
      </Header>
    )
  }
}

export default class AppHeader extends Component {
  state = {
    searchBar: false
  }
  render () {
    return this.state.searchBar && (
      <SearchBar onBlur={e => this.setState({searchBar: false})}/>
    ) || (
      <TitleBar onPressRight={e => this.setState({searchBar: true})} />
    )
  }
}
