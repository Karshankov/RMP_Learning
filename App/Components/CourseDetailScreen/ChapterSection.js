import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({ chapterList, userEnrolledCourse }) {
  const navigation = useNavigation();
  const OnChapterPress = (chapter) => {
    if (userEnrolledCourse[0].length == 0) {
      ToastAndroid.show('Нажмите "Читать лекцию"!', ToastAndroid.LONG);
      return;
    } else {
      navigation.navigate('chapter-content', {
        content: chapter.content,
        chapterId: chapter.id,
        userCourseRecordId: userEnrolledCourse[0]?.id,
      });
    }
  };

  return (
    chapterList && (
      <View
        style={{
          paddingBottom: 35,
          padding: 10,
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: 'montserrat-bold', fontSize: 20 }}>
          Главы
        </Text>
        {chapterList.map((item, index) => (
          <TouchableOpacity
            style={styles.inCompleteChapter}
            onPress={() => OnChapterPress(item)}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: 'montserrat-bold',
                  fontSize: 27,
                  color: Colors.GREY,
                }}
              >
                {index + 1}
              </Text>
              <Text
                style={{
                  color: Colors.GREY,
                  fontFamily: 'montserrat-regular',
                  fontSize: 21,
                }}
              >
                {item.title}
              </Text>
            </View>
            {userEnrolledCourse.length == 0 ? (
              <Ionicons name="md-lock-closed" size={25} color={Colors.GRAY} />
            ) : (
              <Ionicons
                name="play"
                size={25}
                // color={
                //   checkIsChapterCompleted(item.id) ? Colors.GREEN : Colors.GRAY
                // }
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  inCompleteChapter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREY,
  },
});
