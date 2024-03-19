import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { Article } from './HomeScreen';
import topics from './quizData.json';

export default function QuizScreen({ route, navigation }) {
  const { topic } = route.params;
  const { title, questions } = topics[topic];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const handleNextQuestion = () => {
      if (selectedOption !== null) {
        if (selectedOption === currentQuestion.correctAnswerIndex) {
          setScore(score + 1);
        }
        setSelectedOption(null);
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          navigation.navigate('Result', { score: score + 1, totalQuestions: questions.length });
        }
      }
    };

    handleNextQuestion();
  }, [selectedOption, score]);

  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <Article title={title} />
      <View style={styles.questions}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.options, selectedOption === index && styles.disabledOption]}
            onPress={() => setSelectedOption(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bar}>
        <ProgressBar progress={progress} />
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
    margin: 8,
    padding: 5,
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 12,
  },
  optionText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.WHITE
  },
  questionText: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 40,
    width: '85%',
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
