import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import { CompleteChapterContext } from './App/Components/Context/CompleteChapterContext';
import { useState } from 'react';

export default function App() {
  const [isChapterComplete,setIsChapterComplete]=useState(false);
  const [fontsLoaded] = useFonts({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-medium': require('./assets/fonts/medium.ttf'),
  });


  return (
    <RootSiblingParent>
      <ClerkProvider
        publishableKey={
          'pk_test_dW5pcXVlLWltcGFsYS00MS5jbGVyay5hY2NvdW50cy5kZXYk'
        }
      >
        <CompleteChapterContext.Provider value={{isChapterComplete,setIsChapterComplete}}>
        <View style={styles.container}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </View>
        </CompleteChapterContext.Provider>
      </ClerkProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});
