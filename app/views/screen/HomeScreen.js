import React from "react"
import { View, Text, Button } from "react-native"
import AppHeaderTitle from "./../../components/header/AppHeaderTitle"
import AppHeaderLeft from "./../../components/header/AppHeaderLeft"
import AppHeaderRight from "./../../components/header/AppHeaderRight"

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <AppHeaderTitle />,
    headerLeft: <AppHeaderLeft />,
    headerRight: <AppHeaderRight />,
    headerStyle: {
      backgroundColor: '#1e9ef3'
    }
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Detail"
              onPress={() => this.props.navigation.navigate('Detail', {name: 'Detail'})}
          />
        </View>
    );
  }
}