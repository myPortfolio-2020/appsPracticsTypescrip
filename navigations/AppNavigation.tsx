import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNavigation from './BottomNavigation';
import Home from '@/app/(tabs)/Home';

export type RootStackParamsList = {
   BottomNavigation:undefined; 
   Home:undefined;

}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='BottomNavigation' component={BottomNavigation} />         
    </Stack.Navigator>
  )
}

export default AppNavigation