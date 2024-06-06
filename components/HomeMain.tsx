import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { HomeStackParamsList } from '@/app/(tabs)/Home'
import { StackNavigationProp } from "@react-navigation/stack";
import { useFocusEffect } from 'expo-router';


interface mainHomeProp {
    navigation:StackNavigationProp<HomeStackParamsList,'HomeMain'>
}

const HomeMain = ({navigation}:mainHomeProp) => {

    const [counter, setCounter] = useState<boolean>(true)
   
    const handlerViewScreen = ()=>{
        navigation.navigate('ViewPatient')
    }
    const handlerCreateScreen = ()=>{
        navigation.navigate('CreatePatient')
    }

  return (
    <View>
      <Text onPress={handlerViewScreen}>View Patient {counter}</Text>
      <Text onPress={handlerCreateScreen}>CreatePatient</Text>
    </View>
  )
}

export default HomeMain