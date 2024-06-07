import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppHome from "@/app/screens/AppHome";
import AboutUs from "@/app/screens/AboutUs";
import Help from "@/app/screens/Help";
import Home from "@/app/(tabs)/Home";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="AppHome" component={AppHome} /> */}
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
