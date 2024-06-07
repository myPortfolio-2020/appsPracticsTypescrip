import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavParamsList } from "@/navigations/AppNavigation";

interface SignUpProp {
  navigation: StackNavigationProp<RootNavParamsList, "VerficationCode">;
}

const SignUp = ({ navigation }: SignUpProp) => {
  const handlerNavScreen = () => {
    navigation.navigate("VerficationCode");
  };

  return (
    <View className="flex-1 justify-center items-center  p-4">
      <Text className="text-3xl">SignUp</Text>
      <TouchableOpacity>
        <Text onPress={handlerNavScreen}>Verfication Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
