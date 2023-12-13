import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"

const PlayScreens = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>PlayScreens</Text>
      </View>
    </SafeAreaView>
  )
}

export default PlayScreens

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})
