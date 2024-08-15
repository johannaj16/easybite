import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './authStackNavigator';
import AppStackNavigator from './appStackNavigator';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  const isLoggedIn = false; // placeholderr

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={AppStackNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </Stack.Navigator>
  );
}