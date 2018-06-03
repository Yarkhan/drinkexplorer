import React from 'react'
import { View } from 'react-native'
import { Thumbnail, Spinner} from 'native-base'

export default class SpinnerThumbnail extends React.Component {
  state = {loaded: false}
  render () {
    return (
      <View>
        <Thumbnail square
          source={{uri: this.props.uri, cache: 'force-cache'}}
          onLoad={() => this.setState({loaded: true})}
          style={{
            width: (this.state.loaded && (this.props.size || 40)) || 0,
            height: (this.state.loaded && (this.props.size || 40)) || 0,
          }}
        />
        {!this.state.loaded && (
          <Spinner style={{
            width: this.props.size || 40 ,
            height: this.props.size || 40}}
          />
        )}
      </View>
    )
  }
}
