import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Content from '../Components/ChapterContent/Content';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MarkChapterCompleted } from '../Services';

export default function ChapterContentScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    console.log('ChapterId', param.chapterId);
    console.log('RecordId', param.userCourseRecordId);
  }, [param]);

  const onChapterFinish = () => {
    MarkChapterCompleted(param.chapterId, param.userCourseRecordId).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          //ToastAndroid.show('Глава завершена!', ToastAndroid.LONG);
          navigation.goBack();
        }
      }
    );
  };
  return (
    param.content && (
      <View>
        <Content
          content={param.content}
          onChapterFinish={() => onChapterFinish()}
        />
      </View>
    )
  );
}
