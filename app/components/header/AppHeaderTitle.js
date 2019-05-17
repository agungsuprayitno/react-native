import React from 'react'
import {Input} from 'react-native-elements'

export default class AppHeaderTitle extends React.Component {
  render() {
    return (
      <Input
        placeholder='INPUT WITH SHAKING EFFECT'
        shake={true}
        style={{
          border: '1px solid white'
        }}
      />
    )
  }
}
