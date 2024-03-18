import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { FlatList } from 'react-native-gesture-handler';
import ContentItem from './ContentItem';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Content({ content, onChapterFinish }) {
  let contentRef;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1) {
      //navigation.goBack();
      onChapterFinish();
      return;
    }
    setActiveIndex(index + 1);
    contentRef.scrollToIndex({ animated: true, index: index + 1 });
  };
  return (
    <ScrollView style={{ padding: 0, height: '100%' }}>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />
      <FlatList
        data={content}
        scrollEnabled={false} //Скролинг
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          contentRef = ref;
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: Dimensions.get('screen').width,
              padding: 20,
            }}
          >
            <Text
              style={{
                //5342
                fontFamily: 'montserrat-bold',
                fontSize: 22,
                marginTop: 5,
              }}
            >
              {item.heading}
            </Text>

            <ContentItem
              description={item?.description?.html}
              output={item?.output?.html}
            />

            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 10,
              }}
              onPress={() => onNextBtnPress(index)}
            >
              <Text
                style={{
                  padding: 15,
                  color: Colors.WHITE,
                  fontFamily: 'montserrat-medium',
                  textAlign: 'center',
                  fontSize: 17,
                }}
              >
                {content?.length > index + 1 ? 'Далее' : 'Завершить'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
}
