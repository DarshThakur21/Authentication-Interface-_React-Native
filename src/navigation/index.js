import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import CreateAcc from '../screens/CreateAcc';
 import Confirmemailscreen from '../screens/Confirmemialscreen/Confirmemailscreen';
 import Forgotpassscreen from '../screens/Forgotpassscreen/Forgotpassscreen';
 import Confirmpassscreen from '../screens/Confirmpassscreen/Confirmpassscreen';
import HomeScreen from '../screens/HomeScreen';

const Stack=createNativeStackNavigator();
const Navigation = () => {
  return (


    <NavigationContainer>
       <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Create_Account" component={CreateAcc} />
      <Stack.Screen name="ConfirmEmail" component={Confirmemailscreen} />
      <Stack.Screen name="ForgotPassword" component={Forgotpassscreen} />
      <Stack.Screen name="NewPassword" component={Confirmpassscreen} />



      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation