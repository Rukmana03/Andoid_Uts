import { View, Text, Image, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import Colors from '../../constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the Android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        await setActive({ session: createdSessionId });
        console.log("Session is active with id:", createdSessionId);
      } else {
        console.log("Session was not created; use signIn or signUp for further steps.");
      }
    } catch (err) {
      console.error('OAuth error:', err);
    }
  }, [startOAuthFlow]);

  return (
    <View style={{
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Image source={require('./../../assets/images/login.png')}
        style={{
          width: '100%',
          height: 500
        }}
      />
      <View style={{
        padding: 20,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Text style={{
          fontFamily: 'worksans-bold',
          fontSize: 30,
          textAlign: 'center'
        }}>Ready to make a new friend?</Text>
        <Text style={{
          fontFamily: 'worksans',
          fontSize: 18,
          textAlign: 'center',
          color: Colors.GRAY
        }}>Ayo adopsi saya</Text>

        <Pressable
          onPress={onPress}
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.PRIMARY,
            width: '100%',
            borderRadius: 14
          }}
        >
          <Text style={{
            fontFamily: 'worksans-medium',
            fontSize: 20,
            textAlign: 'center'
          }}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
