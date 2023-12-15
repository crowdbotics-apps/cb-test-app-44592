import "react-native-gesture-handler"
import { View, Text } from "react-native"
import React, { useContext } from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import ProfileScreen from "./profile"
import LoginScreen from "./login"
import WelcomeScreen from "./welcome"
import AuthNavigator from "../../modules/social-login/index"
import { OptionsContext, getOptions } from "../../options"

const Drawer = createDrawerNavigator()

const DrawerScreens = () => {
  // console.log("authNav0--->", authNavigator)
  const options = useContext(OptionsContext)
  // console.log("options in drawer", options)
  const Navigator = AuthNavigator.navigator

  return (
    <Drawer.Navigator>
      <Drawer.Screen key="welcome" name="welcome" component={WelcomeScreen} />
      <Drawer.Screen key="profile" name="profile" component={ProfileScreen} />
      {/* <Drawer.Screen
        key="loginScreen"
        name="loginScreen"
        component={LoginScreen}
      /> */}
      <Drawer.Screen
        key="login"
        name="login"
        component={AuthNavigator.navigator}
        // component={AuthNavigator}
      />
    </Drawer.Navigator>
  )
}

export default DrawerScreens
