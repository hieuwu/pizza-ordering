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

import {NavigationContainer } from '@react-navigation/native';
import AuthenStack from './app/navigation/Authen.stack'
import HomeScreen from './app/views/Home/Home.screen';
import ProductListScreen from './app/views/ProductList/ProductList.screen';
import ProductStack from './app/navigation/Product.stack';
import MainMenuDrawer from './app/navigation/MainMenu.drawer'
const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <NavigationContainer>
        <MainMenuDrawer/>
      </NavigationContainer>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;