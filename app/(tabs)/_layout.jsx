import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
    screenOption={{
        tabBarActiveTintColor:Colors.GRAY
    }}
    >
      <Tabs.Screen name='home'
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='favorite'
       options={{
        title:'Favorite',
        headerShown:false,
        tabBarIcon:({color})=><Ionicons name="heart" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='inbox'
      options={{
        title:'Chat',
        headerShown:false,
        tabBarIcon:({color})=><Ionicons name="chatbubbles-sharp" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='profile'
      options={{
        title:'Profile',
        headerShown:false,
        tabBarIcon:({color})=><Ionicons name="person-circle" size={24} color={color} />
      }}
      />
    </Tabs>
  )
}