import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { ScrollView } from 'react-native-gesture-handler';
import { useUser } from '@clerk/clerk-expo';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { CompleteChapterContext } from '../Components/Context/CompleteChapterContext';

export default function CourseDetailScreen() {
  const navigate = useNavigation();
  const params = useRoute().params;
  const { user } = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const { isChapterComplete, setIsChapterComplete } = useContext(CompleteChapterContext);

  useEffect(() => {
    isChapterComplete && GetUserEnrolledCourse();
  }, [isChapterComplete])



  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        // console.log('Вроде робит', resp);
        if (resp) {
          GetUserEnrolledCourse();
          // ToastAndroid.show('Теперь вы читаете эту лекцию!', ToastAndroid.LONG);
        }
      }
    );
  };

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(
      params.course.id,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log('ОПЯТЬ РОБИТ X2-----', resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses);
    });
  };



  return (
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons name="ios-arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
      <DetailSection
        course={params.course}
        userEnrolledCourse={userEnrolledCourse}
        enrollCourse={() => UserEnrollCourse()}
      />
      <ChapterSection chapterList={params.course.chapters}
        userEnrolledCourse={userEnrolledCourse}
      />
    </ScrollView>
  );
}
