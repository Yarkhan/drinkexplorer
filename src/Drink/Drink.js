import React from 'react'
import { View } from 'react-native'
import {
  Text,
  Button,
  List,
  Content,
  ListItem,
  Left,
  Right,
  Icon,
  Spinner,
  Body,
  Thumbnail,
  Card,
  CardItem
} from 'native-base'
import SpinnerThumbnail from '../SpinnerThumbnail'
import Error from '../Error'

export default props => {
  if (props.error) return <Error loadItems={props.loadItems} />
  if (!props.item) return <Spinner />
  return (
    <Content>
      <Card>
        <CardItem header>
          <Text>{props.item.name}</Text>
        </CardItem>
        <CardItem cardBody>
          <SpinnerThumbnail uri={props.item.thumbnail} size={400} />
          <Text>Serve: {props.item.glass}</Text>
        </CardItem>
        <CardItem header>
          <Text>Instructions</Text>
        </CardItem>
        <CardItem>
          <Text>{`${props.item.instructions}`}</Text>
        </CardItem>
        {props.item.ingredients.map(ingredient => (
          <CardItem key={ingredient.name}>
            <SpinnerThumbnail uri={ingredient.thumbnail} />
            <Left>
              <Text>{`${ingredient.measure} ${ingredient.name}`}</Text>
            </Left>
          </CardItem>
        ))}
      </Card>
    </Content>
  )
}
