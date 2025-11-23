import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useTheme } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '@/contexts/ThemeContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {colors} = useAppTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff385c',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#FFF',
          position: 'absolute',
          elevation: 0, // For Android
          borderTopWidth: 0.5,
          borderColor: '#CCC'
        },
        // tabBarBackground: () => (
        //   <BlurView
        //     tint={'light'} 
        //     intensity={Platform.OS === 'ios' ? 40 : 60}
        //     style={StyleSheet.absoluteFill}
        //   />
        // )
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <Feather name="book-open" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
      name='library'
       options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookshelf" size={24} color={color} />,
        }}/>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
