import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function CourseItem({ item }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginRight: 15,
      }}
    >
      <Image
        source={{ uri: item?.banner?.url }}
        style={{
          width: 210,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View style={{ padding: 7 }}>
        <Text
          style={{
            fontFamily: 'montserrat-medium',
            fontSize: 16,
          }}
        >
          {item.name}
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginTop: 5,
            }}
          >
            <Ionicons name="book-outline" size={18} color="black" />
            <Text>{item?.chapters?.length} Раздела</Text>
          </View>

          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginTop: 5,
              }}
            >
              <Ionicons name="md-time-outline" size={18} color="black" />
              <Text>{item?.time}</Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
}
