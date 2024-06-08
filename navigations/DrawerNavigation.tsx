import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "@/app/screens/AboutUs";
import Help from "@/app/screens/Help";
import HomeScreen from "@/app/screens/HomeScreen";
import Home from "@/app/(tabs)/Home";
import TabsNavigation from "./TabsNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen name="MediCharts" component={TabsNavigation} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
