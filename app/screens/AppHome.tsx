import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppHome = () => {
  return (
    <View className="flex-1 justify-between p-4">
      <View className="grow">
        <Text className="text-xl py-[14]">Patients Management</Text>
        <View className="flex flex-row justify-evenly">
          <View className="w-2/4">
            <View className="mr-1 p-3 border-double border-2 rounded border-slate-200">
              <TouchableOpacity>
                <Text className="text-center uppercase text-[#4B9CFF] pb-1">
                  View
                </Text>
                <Text className="text-center">All Patients</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-2/4">
            <View className="ml-1 p-3  border-double border-2 rounded border-slate-200">
              <TouchableOpacity>
                <Text className="text-center uppercase text-[#4B9CFF] pb-1">
                  CREATE
                </Text>
                <Text className="text-center">New Patient</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="grow">
        <Text className="text-xl py-[14]">Patients Management</Text>
        <View className="flex flex-row justify-evenly">
          <View className="w-2/4">
            <View className="mr-1 p-3 border-double border-2 rounded border-slate-200">
              <TouchableOpacity>
                <Text className="text-center uppercase text-[#4B9CFF] pb-1">
                  View
                </Text>
                <Text className="text-center">All Patients</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-2/4">
            <View className="ml-1 p-3  border-double border-2 rounded border-slate-200">
              <TouchableOpacity>
                <Text className="text-center uppercase text-[#4B9CFF] pb-1">
                  CREATE
                </Text>
                <Text className="text-center">New Patient</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="grow">
        <Text className="text-xl py-[14]">Patients Management</Text>
        <View className="flex flex-row justify-evenly">
          <View className="w-2/4">
            <View className="mr-1 p-3 border-double border-2 rounded border-slate-200">
              <TouchableOpacity>
                <Text className="text-center uppercase text-[#4B9CFF] pb-1">
                  View
                </Text>
                <Text className="text-center">All Patients</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-2/4">
            <View className="ml-1 p-3  border-double border-2 rounded border-slate-200">
              <TouchableOpacity>
                <Text className="text-center uppercase text-[#4B9CFF] pb-1">
                  CREATE
                </Text>
                <Text className="text-center">New Patient</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppHome;
