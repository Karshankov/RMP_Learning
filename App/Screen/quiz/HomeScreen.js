import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Choose Topic 1"
        onPress={() => navigation.navigate('Quiz', { topic: 'Topic1' })}
      />
      <Button
        title="Choose Topic 2"
        onPress={() => navigation.navigate('Quiz', { topic: 'Topic2' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});