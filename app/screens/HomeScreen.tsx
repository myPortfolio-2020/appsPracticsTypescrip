import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../(tabs)/Home";
import Patients from "../(tabs)/Patients";
import TabsStackHolder from "./TabsStackHolder";
import DrawerNavigation from "../../navigations/DrawerNavigation";

export type tabsStackParamsList = {
  Home: undefined;
  TabsStackHolder: undefined;
  DrawerNavigation: undefined;
  Patients: undefined;
};

const Stack = createStackNavigator<tabsStackParamsList>();

const HomeScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TabsStackHolder" component={TabsStackHolder} />
        <Stack.Screen name="Patients" component={Patients} />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreen;
