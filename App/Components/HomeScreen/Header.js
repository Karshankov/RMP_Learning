import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import crown from '../../../assets/images/crown.png';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <GestureHandlerRootView>
        <View style={{marginTop: 50}}>
          <View style={[{ justifyContent: 'space-between' }, styles.rowStyle]}>
            <View style={styles.rowStyle}>
              <Image
                source={{ uri: user?.imageUrl }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 99,
                }}
              />
              <View >
                <Text style={{ color: Colors.WHITE }}>Добро пожаловать,</Text>
                <Text style={styles.mainHeader}>{user?.fullName}</Text>
              </View>
            </View>
            <View style={styles.rowStyle}>
              <Image source={crown} style={{ width: 40, height: 40 }} />
              <Text style={styles.mainHeader}>38</Text>
            </View>
          </View>
          {/* <View
            style={{
              backgroundColor: Colors.WHITE,
              display: 'flex',
              paddingLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 99,
              paddingRight: 5,
              marginTop: 25,
            }}
          >
            <TextInput placeholder="Поиск лекции" style={{ fontSize: 18 }} />
            <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
          </View> */}
        </View>
      </GestureHandlerRootView>
    )
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
