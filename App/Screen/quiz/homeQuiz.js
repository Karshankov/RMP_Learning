
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

const Stack = createStackNavigator();

export default function homeQuiz() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz App' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}