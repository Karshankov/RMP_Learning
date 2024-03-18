import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import OptionItem from './OptionItem';
import { enrollCourse } from '../../Services';
export default function DetailSection({
  course,
  enrollCourse,
  userEnrolledCourse,
}) {
  return (
    <View
      style={{ padding: 10, borderRadius: 15, backgroundColor: Colors.WHITE }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get('screen').width * 0.86,
          height: 190,
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          fontFamily: 'montserrat-bold',
          fontSize: 27,
          marginTop: 10,
        }}
      >
        {course.name}
      </Text>

      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <OptionItem
            icon={'book-outline'}
            value={course.chapters?.length + ' Разделов'}
          />
          <OptionItem icon={'md-time-outline'} value={course.time} />
        </View>

        <OptionItem icon={'person-circle-outline'} value={'Пилецкая С.А'} />
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'montserrat-bold',
            fontSize: 20,
            paddingTop: 10,
          }}
        >
          Описание
        </Text>
        <Text
          style={{
            fontFamily: 'montserrat-regular',
            fontSize: 16,
            lineHeight: 23,
          }}
        >
          {course.description.markdown}
        </Text>
      </View>

      <View>
        {userEnrolledCourse?.length == 0 ? (
          <TouchableOpacity
            onPress={() => enrollCourse()}
            style={{
              padding: 20,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: 'montserrat-regular',
                color: Colors.WHITE,
                textAlign: 'center',
                fontSize: 17,
              }}
            >
              Читать лекцию
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
