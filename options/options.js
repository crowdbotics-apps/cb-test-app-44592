import options from "../modules/social-login/options"

export const globalOptions = {
  name: "cb-test-app-44592",
  url: "https://cb-test-app-44592.botics.co",
  api: "https://cb-test-app-44592.botics.co/api/v1",
  screenOptions: {
    headerShown: false
  },
  initialRoute: "drawerScreens"
  // initialRoute: "socialLogin"
  // initialRoute: "about"
}
export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },
  drawerScreens: options
}

// write a function that add two numbers
