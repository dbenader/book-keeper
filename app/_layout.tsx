import { DarkTheme, LightTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
      Montserrat: require('../assets/fonts/Montserrat.ttf'),
      RobotoCondensed: require('../assets/fonts/RobotoCondensed.ttf'),
      Inter: require('../assets/fonts/Inter.ttf'),
      InterTight: require('../assets/fonts/InterTight.ttf')
  });

  useEffect(() => {
      if (fontsLoaded || fontError) {
          
      }
      if (fontError) {
          console.warn('error loading front!')
      }
  }, [fontsLoaded, fontError]);


  if (!fontsLoaded && !fontError) {
      return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name='onboarding'/>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
