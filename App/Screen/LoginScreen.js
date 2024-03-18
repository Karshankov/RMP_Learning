import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import android from '../../assets/images/android.jpg';
import Colors from '../Utils/Colors';
import google from '../../assets/images/google.png';
import { Touchable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser.tsx';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        source={android}
        style={{
          width: 650,
          height: 500,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: 600,
          width: '100%',
          marginTop: -80,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 35,
            color: Colors.WHITE,
            fontFamily: 'montserrat-bold',
            marginTop: 20,
          }}
        >
          РМП
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            marginTop: 50,
            color: '#d9d9d9',
            fontFamily: 'montserrat-light',
          }}
        >
          Приложение для изучения предмета
        </Text>

        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: Colors.WHITE,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
            padding: 10,
            borderRadius: 99,
            marginTop: 55,
          }}
        >
          <Image source={google} style={{ width: 40, height: 40 }} />
          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
            }}
          >
            Войти с помощью Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
