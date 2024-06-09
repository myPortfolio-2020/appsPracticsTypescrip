import { View, Text } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigations/AppNavigation";

interface SignInProp {
  navigation: StackNavigationProp<RootStackParamList, "SignIn">;
}

const SignIn = ({ navigation }: SignInProp) => {
  const handlerNavScreen = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text>SignIn</Text>
      <Text onPress={handlerNavScreen}>HomeMain</Text>
    </View>
  );
};

export default SignIn;
