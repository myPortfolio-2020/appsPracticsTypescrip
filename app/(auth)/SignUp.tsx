import { View, Text } from "react-native";
import React from "react";
import VerficationCode from "@/app/(auth)/VerficationCode";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigations/AppNavigation";

interface SignUpProp {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
}

const SignUp = ({ navigation }: SignUpProp) => {
  const handlerNavScreen = () => {
    navigation.navigate("VerficationCode");
  };
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text>SignUp</Text>
      <Text onPress={handlerNavScreen}>Go To VerficationCode</Text>
    </View>
  );
};

export default SignUp;
