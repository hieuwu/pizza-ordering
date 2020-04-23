import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack.js';
import reducer from './src/redux/reducer.js';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Provider>
    );
  }
}
