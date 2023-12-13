import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>SettingsScreen</Text>
        <Button
          title="Go To Sign Out"
          onPress={() => navigation.navigate("signOut")}
        />
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})
