import { View, Text } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigations/AppNavigation";

interface VerificationCodeProp {
  navigation: StackNavigationProp<RootStackParamList, "VerficationCode">;
}

const VerficationCode = ({ navigation }: VerificationCodeProp) => {
  const handlerNavScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text>VerficationCode</Text>
      <Text onPress={handlerNavScreen}>Go To SignIn Now</Text>
    </View>
  );
};

export default VerficationCode;
