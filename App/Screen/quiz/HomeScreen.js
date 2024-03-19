import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../Utils/Colors';
import topics from './quizData.json';

export const Article = ({ title }) => {
  return (
    <Text style={{ position: 'absolute', alignSelf: 'center', top: '8%', fontSize: 30, fontFamily: 'montserrat-medium' }}>
      {title}
    </Text>
  );
};

const ButtonQuiz = ({ title, nav, topic, navigation, source }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(nav, { topic: topic })}
      style={styles.cells}
    >
      <Image source={source} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Article title='Тесты' />
      <ButtonQuiz
        title={topics.Topic1.title}
        nav='Quiz'
        topic='Topic1'
        navigation={navigation}
        source={require('../../../assets/images/crown.png')}
      />
      <ButtonQuiz
        title={topics.Topic2.title}
        nav='Quiz'
        topic='Topic2'
        navigation={navigation}
        source={require('../../../assets/images/google.png')}
      />
      <ButtonQuiz
        title={topics.Topic3.title}//название самой ячейки
        nav='Quiz'
        topic='Topic3' //меняешь на то, в какой квиз тебе надо
        navigation={navigation}
      />
      <ButtonQuiz
        title={topics.Topic4.title}
        nav='Quiz'
        topic='Topic4'
        navigation={navigation}
      />
      <ButtonQuiz
        title={topics.Topic5.title}
        nav='Quiz'
        topic='Topic5'
        navigation={navigation}
      />
      <ButtonQuiz
        title={topics.Topic6.title}
        nav='Quiz'
        topic='Topic6'
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { //страничное распределение
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Colors.WHITE,
  },
  cells: { //сами ячейки
    margin: 10,
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 12,
    width: '40%',
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "hidden",
    flexDirection: 'column',
    gap: 15
  },
  img: {
    height: '70%',
    aspectRatio: 1, //отвечает за то, что ФОТО КВАДРАТНОЕ, зависит от высоты
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});