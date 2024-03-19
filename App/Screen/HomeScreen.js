import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/HomeScreen/Header';
import Colors from '../Utils/Colors';
import CourseList from '../Components/HomeScreen/CourseList';

export default function HomeScreen() {

  return (
    <ScrollView
      bounces={false}    >
      <View
        style={{ backgroundColor: Colors.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: -120 }}>
          <CourseList courseLevel={'One'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <CourseList courseLevel={'Two'} />
        </View>
        <View style={{ marginTop: 20 }}>
          <CourseList courseLevel={'Three'} />
        </View>
      </View>
    </ScrollView>
  );
}
