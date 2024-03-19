import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Colors from '../../Utils/Colors';
import { Article } from './HomeScreen'

export default function ResultScreen({ route, navigation }) {
  const { score, totalQuestions } = route.params;

  const buttonOpacity = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.decoration} />
      <Article title="Ваш результат:" />
      <Text style={styles.resultScore}>{score} из {totalQuestions}</Text>
      <Animated.View style={{ opacity: buttonOpacity }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Начать заново</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  decoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: -1,
  },
  resultScore: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.SECOND,
  },
  resultPercentage: {
    fontSize: 18,
    color: Colors.TERTIARY,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.SECOND,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});
