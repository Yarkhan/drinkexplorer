import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Header, Left, Button, Body, Right, Icon, Title, Item, Input, Text
} from 'native-base'

class SearchBar extends Component {
  componentDidMount () {
    this.searchBar.focus()
  }
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input autofocus placeholder="Search"
            ref={e => e && (this.searchBar = e._root)}
            onBlur={this.props.onBlur}
          />
          <Icon name="ios-wine" />
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
