import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';

import store from './src/redux/store/index';

const generalStore = store;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={generalStore}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
