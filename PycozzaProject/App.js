/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RegisterScreen from './app/views/RegisterScreen/Register.screen';
import LoginScreen from './app/views/LoginScreen/Login.screen';
import {NavigationContainer } from '@react-navigation/native';
import AuthenStack from './app/navigation/Authen.stack'
import HomeScreen from './app/views/HomeScreen/Home.screen';

const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
     <HomeScreen/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;