import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "@/app/screens/drawer/AboutUs";
import Help from "@/app/screens/drawer/Help";
import TabsStackHolder from "@/app/screens/TabsStackHolder";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MediCharts" component={TabsStackHolder} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
