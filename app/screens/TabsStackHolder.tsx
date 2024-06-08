import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "@/navigations/TabsNavigation";
import Patients from "../(tabs)/Patients";
import Home from "../(tabs)/Home";
import Schedule from "../(tabs)/Schedule";
import Claim from "../(tabs)/Claim";

export type TabsParamsList = {
  Home: undefined;
  Patients: undefined;
  Schedule: undefined;
  Claim: undefined;
  TabsNavigation: undefined;
};

const Stack = createStackNavigator<TabsParamsList>();
const TabsStackHolder = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabsNavigation" component={TabsNavigation} />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Claim" component={Claim} />
    </Stack.Navigator>
  );
};

export default TabsStackHolder;
