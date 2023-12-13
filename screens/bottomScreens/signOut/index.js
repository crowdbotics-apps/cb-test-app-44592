import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native"
import React from "react"

const SignOutScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>SignOutScreen</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate("welcome")}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default SignOutScreen
