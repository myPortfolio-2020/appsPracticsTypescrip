import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "@/app/screens/SplashScreen";
import SignIn from "@/app/(auth)/SignIn";
import SignUp from "@/app/(auth)/SignUp";
import VerficationCode from "@/app/(auth)/VerficationCode";
import HomeScreen from "../app/screens/HomeScreen";

export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  VerficationCode: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
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
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
