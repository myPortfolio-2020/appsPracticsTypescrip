import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "@/app/screens/SplashScreen";
import SignUp from "@/app/(auth)/SignUp";
import VerficationCode from "@/app/(auth)/VerficationCode";
import SignIn from "@/app/(auth)/SignIn";
import AppHome from "@/app/screens/AppHome";
import DrawerNavigation from "@/navigations/DrawerNavigation";

export type RootNavParamsList = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  VerficationCode: undefined;
  AppHome: undefined;
  DrawerNavigation: undefined;
};
const Stack = createStackNavigator<RootNavParamsList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#FAFCFF",
        },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerficationCode"
        component={VerficationCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppHome"
        component={AppHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
