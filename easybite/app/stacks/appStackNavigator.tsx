import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '../../components/navigation/TabBarIcon';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';

export default function AppStackNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'bookmarks',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bookmark' : 'bookmark-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="findfood"
        options={{
          title: 'find food!',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'restaurant' : 'restaurant-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
}
