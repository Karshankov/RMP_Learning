import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const topics = {
  Topic1: [
    { question: 'Question 1 for Topic 1', options: ['Option 1', 'Option 2', 'Option 3'], correctAnswerIndex: 0 },
    { question: 'Question 2 for Topic 1', options: ['Option 1', 'Option 2', 'Option 3'], correctAnswerIndex: 1 },
    // Add more questions for Topic 1
  ],
  Topic2: [
    { question: 'Question 1 for Topic 2', options: ['Option 1', 'Option 2', 'Option 3'], correctAnswerIndex: 2 },
    { question: 'Question 2 for Topic 2', options: ['Option 1', 'Option 2', 'Option 3'], correctAnswerIndex: 0 },
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

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => handleOptionSelect(index)}
          disabled={selectedOption !== null}
        />
      ))}
      <ProgressBar progress={progress} />
      <Button title="Next" onPress={handleNextQuestion} disabled={selectedOption === null} />
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
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginVertical: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
});