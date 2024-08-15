import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from  '../(authtabs)/signupscreen';
import LoginScreen from  '../(authtabs)/loginscreen';
import DetailsScreen from  '../(authtabs)/detailsscreen';
import PreferencesScreen from  '../(authtabs)/preferencesscreen';

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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}