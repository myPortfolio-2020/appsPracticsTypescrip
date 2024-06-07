import { View, Text } from "react-native";
import React from "react";
import AppNavigation from "@/navigations/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";

const _layout = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
};

export default _layout;
