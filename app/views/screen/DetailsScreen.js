import React from "react"
import { View, Text, Button } from "react-native"

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile', {name: 'Agung'})}
        />
      </View>
    )
  }
}