import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "@/app/screens/AboutUs";
import Help from "@/app/screens/Help";

import TabsNavigation from "./TabsNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home 1stTab" component={Home} /> */}
      <Drawer.Screen name="TabsNavigation" component={TabsNavigation} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
