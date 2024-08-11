import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from  '../(authtabs)/signupscreen';
import LoginScreen from  '../(authtabs)/loginscreen';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}