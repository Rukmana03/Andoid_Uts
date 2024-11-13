import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log('No values stored under key: ' + key);
      }
      return item;
    } catch (error) {
      console.error('SecureStore get item error: ', error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error('SecureStore save token error: ', err);
      return null;
    }
  },
};

export default function RootLayout() {
  
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
  }

  const [fontsLoaded] = useFonts({
    'worksans': require('./../assets/fonts/WorkSans-Regular.ttf'),
    'worksans-medium': require('./../assets/fonts/WorkSans-Medium.ttf'),
    'worksans-bold': require('./../assets/fonts/WorkSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null; // Menampilkan loading screen atau fallback
  }

  return (
    <ClerkProvider 
    tokenCache={tokenCache} 
    publishableKey={publishableKey}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)"
        options={{
        headerShown: false
              }}
              />
        <Stack.Screen name="login/index"
        options={{
        headerShown: false
           }}
        />
      </Stack>
    </ClerkProvider>
  );
}
