import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Images from '../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('AccessToken');
    if (!dataToken) {
      navigation.replace('MainScreen');
    } else {
      navigation.replace('Home');
    }
  };

  return (
   <ImageBackground source={Images.splash} resizeMode={'cover'} style={{flex:1}}/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontWeight: '800',
    fontSize: 30,
    color: 'white',
  },
});
