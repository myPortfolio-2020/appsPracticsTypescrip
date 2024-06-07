import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/app/(tabs)/Home";
import Claim from "@/app/(tabs)/Claim";
import Schedule from "@/app/(tabs)/Schedule";
import Patients from "@/app/(tabs)/Patients";

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home tab" component={Home} />
      <Tab.Screen name="Patients" component={Patients} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Claim" component={Claim} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
