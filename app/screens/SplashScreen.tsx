import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigations/AppNavigation";

interface SplashProp {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
}

const SplashScreen = ({ navigation }: SplashProp) => {
  const handlerNavScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-3xl">SplashScreen</Text>
      <TouchableOpacity>
        <Text onPress={handlerNavScreen}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;