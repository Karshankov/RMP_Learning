import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../Utils/Colors';

export const Article = ({ title }) => {
  return (
    <Text style={{ position: 'absolute', alignSelf: 'center', top: '5%', fontSize: 30, fontFamily: 'montserrat-medium' }}>
      {title}
    </Text>
  );
};

const ButtonQuiz = ({ title, nav, topic, navigation, source }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate(nav, { topic: topic })}
        style={styles.cells}
      >
        <Image source={source} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Article title='Тесты' />
      <ButtonQuiz
        title='Тест 1'
        nav='Quiz'
        topic='Topic1'
        navigation={navigation}
        source={require('../../../assets/images/crown.png')}
      />
      <ButtonQuiz
        title="Тест 2"
        nav='Quiz'
        topic='Topic2'
        navigation={navigation}
        source={require('../../../assets/images/google.png')}
      />
      <ButtonQuiz
        title="Choose Topic 3" //название самой ячейки
        nav='Quiz'
        topic='Topic2' //меняешь на то, в какой квиз тебе надо
        navigation={navigation}
      />
      <ButtonQuiz
        title="Choose Topic 4"
        nav='Quiz'
        topic='Topic2'
        navigation={navigation}
      />
      <ButtonQuiz
        title="Choose Topic 5"
        nav='Quiz'
        topic='Topic2'
        navigation={navigation}
      />
      <ButtonQuiz
        title="Choose Topic 6"
        nav='Quiz'
        topic='Topic2'
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
  title: { //текст
    fontSize: 20,
    color: Colors.WHITE,
  },
});