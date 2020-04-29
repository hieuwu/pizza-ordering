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

import { NavigationContainer } from '@react-navigation/native';
import AuthenStack from './app/navigation/Authen.stack'
import HomeScreen from './app/views/Home/Home.screen';
import ProductListScreen from './app/views/ProductList/ProductList.screen';
import ProductStack from './app/navigation/Product.stack';
import MainMenuDrawer from './app/navigation/MainMenu.drawer'
import CategoriesScreen from './app/views/Categories/Categories.screen';
import HomeStack from './app/navigation/Home.stack';
import CartScreen from './app/views/Cart/Cart.screen'
import CartStack from './app/navigation/Cart.stack';
import { Provider } from 'react-redux'

import store from './app/redux/store/index'
import ProductDetailScreen from './app/views/ProductDetail/ProductDetail.screen';

const appStore = store;
const App: () => React$Node = () => {
//   appStore.dispatch({
//     type: 'ADD_TODO',
//     text: 'Test',
//     id: 2,
// });
//   console.log(appStore.getState().todos);
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Provider store = {appStore}>
        <NavigationContainer>
          <MainMenuDrawer />
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;