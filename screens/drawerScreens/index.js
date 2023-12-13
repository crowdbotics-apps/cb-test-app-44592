import "react-native-gesture-handler"
import { View, Text } from "react-native"
import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import ProfileScreen from "./profile"
import LoginScreen from "./login"
import WelcomeScreen from "./welcome"

const Drawer = createDrawerNavigator()

const DrawerScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen key="welcome" name="welcome" component={WelcomeScreen} />
      <Drawer.Screen key="profile" name="profile" component={ProfileScreen} />
      <Drawer.Screen key="login" name="login" component={LoginScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerScreens
