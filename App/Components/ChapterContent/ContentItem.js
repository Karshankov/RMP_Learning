import { View, Text, useWindowDimensions, Dimensions } from 'react-native';
import React, { useState } from 'react';
import RenderHTML from 'react-native-render-html';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ContentItem({ description, output }) {
  const width = useWindowDimensions();
  const [isRun, setIsRun] = useState(false);
  const descriptionSource = {
    html: description,
  };
  const outputSource = {
    html: output,
  };

  return (
    description && (
      <View>
        <RenderHTML
          tagsStyles={tagsStyles}
          contentWidth={width}
          
          source={descriptionSource}
        />

        {output != null ? (
          <TouchableOpacity
            onPress={() => setIsRun(true)}
            style={{ marginTop: -20, marginBottom: 20,}}
          >
            <Text
              style={{
                width: 105,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 10,
                padding: 10,
                fontFamily: 'montserrat-medium',
                fontSize: 15,
                color: Colors.WHITE,
                textAlign: 'center',
              }}
            >
              Запустить
            </Text>
          </TouchableOpacity>
        ) : null}

        {isRun ? (
          <>
            <Text
              style={{
                fontFamily: 'montserrat-medium',
                marginBottom: 10,
                fontSize: 17,
              }}
            >
              Вывод:
            </Text>
            <RenderHTML
              contentWidth={width}
              source={outputSource}
              tagsStyles={outputStyles}
            />
          </>
        ) : null}
      </View>
    )
  );
}
const tagsStyles = {
  body: {
    fontSize: 17,
    textAlign: 'justify',
    textJustify: 'auto',
    


  },
  code: {
    backgroundColor: Colors.SECOND,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
  img:{
    width: Dimensions.get('screen').width*0.9,
    
  }
};
const outputStyles = {
  body: {
    fontSize: 17,
    backgroundColor: Colors.SECOND,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};
