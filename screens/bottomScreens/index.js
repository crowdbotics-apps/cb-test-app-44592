import { View, Text } from "react-native"
import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import HomeScreen from "./home"
import SettingsScreen from "./settings"
import PlayScreens from "./play"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { createStackNavigator } from "@react-navigation/stack"
import SignOutScreen from "./signOut"

const BottomTab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const SignOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        key="settings"
        name="settings"
        component={SettingsScreen}
        options={{
          headerShown: true
        }}
      />

      <Stack.Screen
        key="signOut"
        name="signOut"
        component={SignOutScreen}
        options={{
          headerTitle: "Sign Out Screen"
        }}
      />
    </Stack.Navigator>
  )
}

const BottomScreens = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <BottomTab.Screen
        key="home"
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" color={focused && "orange"} size={24} />
          )
        }}
      />
      <BottomTab.Screen
        key="play"
        name="play"
        component={PlayScreens}
        options={{
          tabBarLabel: "Play",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="play-box-outline"
              color={focused && "orange"}
              size={24}
            />
          )
        }}
      />
      <BottomTab.Screen
        key="signOutNavigator"
        name="signOutNavigator"
        component={SignOutStack}
        options={{
          tabBarLabel: "Settings",

          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="settings-helper"
              color={focused && "orange"}
              size={24}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomScreens
