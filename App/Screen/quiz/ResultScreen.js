
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, totalQuestions } = route.params;
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>You scored {score} out of {totalQuestions}</Text>
      <Text style={styles.resultText}>Percentage: {percentage}%</Text>
      <Button title="Try Again" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    marginBottom: 20,
  },
});