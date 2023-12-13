import React from "react"
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Button
} from "react-native"

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Text style={styles.text}>Welcome to login screen</Text>
          <Button
            title="Go to Welcome Screen"
            onPress={() => navigation?.navigate("welcome")}
          />
          <Button
            title="Go to About Screen"
            onPress={() => navigation?.navigate("about")}
          />
          <Button
            title="Go Back"
            onPress={() => navigation?.navigate("signUp")}
          />
          <Button
            title="Go to bottom tab"
            onPress={() => navigation?.navigate("bottom")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  }
})
export default LoginScreen
