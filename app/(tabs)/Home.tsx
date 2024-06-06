import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ViewPatient from '@/components/ViewPatient';
import CreatePatient from '@/components/CreatePatient';
import HomeMain from '@/components/HomeMain';


export type HomeStackParamsList = {
  HomeMain:undefined;
  ViewPatient:undefined;
  CreatePatient:undefined;  
}

const Stack = createNativeStackNavigator<HomeStackParamsList>()

const Home = () => {

 
  return (
    <>  
    <Stack.Navigator>
      <Stack.Screen name='HomeMain' component={HomeMain}/>
      <Stack.Screen name='ViewPatient' component={ViewPatient} />
      <Stack.Screen name='CreatePatient' component={CreatePatient} />
    </Stack.Navigator>
    </>

  )
}

export default Home