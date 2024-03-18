import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { Article } from './HomeScreen';

const topics = {
  Topic1: [
    { topic: 'Тест 1', question: 'Сколько пальцев на одной руке у человека?', options: ['5 пальцев', '6 пальцев', '20 пальцев'], correctAnswerIndex: 0 },
    { topic: 'Тест 1', question: 'А на ноге ? хехехе', options: ['3', '5', '19'], correctAnswerIndex: 1 },
    // Add more questions for Topic 1
  ],
  Topic2: [
    { topic: 'Тест 2', question: 'Вопрос 1', options: ['Option 1', 'Option 2', 'Option 3'], correctAnswerIndex: 2 },
    { topic: 'Тест 2', question: 'Вопрос 2', options: ['Option 1', 'Option 2', 'Option 3'], correctAnswerIndex: 0 },
    // Add more questions for Topic 2
  ],
  // Add more topics here
};

export default function QuizScreen({ route, navigation }) {
  const { topic } = route.params;
  const questions = topics[topic];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === currentQuestion.correctAnswerIndex) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigation.navigate('Result', { score, totalQuestions: questions.length });
      }
    }
  };

  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <Article title={currentQuestion.topic} />
      <View style={styles.questions}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.options, selectedOption === index && styles.disabledOption]}
            onPress={() => handleOptionSelect(index)} // Call handleOptionSelect() on press
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bar}>
        <ProgressBar progress={progress} />
        <Button title="Продолжить" onPress={handleNextQuestion} disabled={selectedOption === null} color={Colors.SECOND} />
      </View>
    </View>
  );
}

const ProgressBar = ({ progress }) => (
  <View style={styles.progressBar}>
    <View style={{ ...styles.progress, width: `${progress}%` }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
  },
  options: {
    margin: 10,
    width: '80%',
    height: '8%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 12,
  },
  optionText: {
    fontSize: 20,
    color: Colors.WHITE
  },
  questionText: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 40,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'montserrat-medium'
  },
  progressBar: {
    alignSelf: 'center',
    width: '80%',
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 12,
    marginVertical: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  bar: {
    flex: 0.4
  },
  questions: {
    flex: 2,
    justifyContent: 'center'
  },
  disabledOption: {
    backgroundColor: Colors.SECOND
  }
});
