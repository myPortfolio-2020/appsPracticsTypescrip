import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavParamsList } from "@/navigations/AppNavigation";

interface SignInProp {
  navigation: StackNavigationProp<RootNavParamsList, "DrawerNavigation">;
}

const SignIn = ({ navigation }: SignInProp) => {
  const handleNavScreen = () => {
    navigation.navigate("DrawerNavigation");
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl">SignIn</Text>
      <TouchableOpacity>
        <Text onPress={handleNavScreen}>AppHome Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
