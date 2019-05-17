import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './app/views/screen/HomeScreen'
import DetailsScreen from './app/views/screen/DetailsScreen'
import ProfileScreen from './app/views/screen/ProfileScreen'

//  TODO: will be a router
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}'s Detail'`,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}'s Profile'`,
      }),
    }
  },
  {
    initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);