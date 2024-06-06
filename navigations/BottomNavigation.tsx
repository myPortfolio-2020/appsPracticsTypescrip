import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/app/(tabs)/Home';
import Patients from '@/app/(tabs)/Patients';
import Sechedule from '@/app/(tabs)/Sechedule';
import Claim from '@/app/(tabs)/Claim';

const Tabs = createBottomTabNavigator()

const screenOptions:any = {
    headerShown:true    
}

const BottomNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Tabs.Screen name="Patients" component={Patients} />
        <Tabs.Screen name="Schedule" component={Sechedule} />
        <Tabs.Screen name="Claim" component={Claim} />
    </Tabs.Navigator>
  )
}

export default BottomNavigation