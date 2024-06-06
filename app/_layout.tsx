import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "@/navigations/AppNavigation";

const _layout = () => {
  return(
    <>
    <NavigationContainer independent={true}>
      <AppNavigation/>
    </NavigationContainer>
    </>
  )
};

export default _layout;
