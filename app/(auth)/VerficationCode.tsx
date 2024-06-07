import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavParamsList } from "@/navigations/AppNavigation";

interface VerificationCodeProp {
  navigation: StackNavigationProp<RootNavParamsList, "SignIn">;
}

const VerficationCode = ({ navigation }: VerificationCodeProp) => {
  const handlerNavScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View className="flex-1 justify-center items-center  p-4">
      <Text className="text-3xl">VerficationCode</Text>
      <TouchableOpacity>
        <Text onPress={handlerNavScreen}>Go To Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerficationCode;
