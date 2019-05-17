import React from 'react'
import {Icon} from 'react-native-elements'

export default class AppHeaderRight extends React.Component {
  render() {
    return (
      <Icon
        name='account-circle'
        color='#fff'
        style={{
          paddingLeft: '10px'
        }}
      />
    )
  }
}
