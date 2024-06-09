import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(tabs)/Home";
import Patients from "../(tabs)/Patients";
import Schedule from "../(tabs)/Schedule";
import Claim from "../(tabs)/Claim";

const Tab = createBottomTabNavigator();

const TabsStackHolder = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Claim"
        component={Claim}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabsStackHolder;
