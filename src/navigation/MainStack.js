import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../modules/view/Welcome/Welcome.Screen';
import Menu from '../modules/view/Menu/Menu.Screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../modules/resources/colors/Colors';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

export default class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: colors.startOrder,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
              fontWeight: 'bold',
            },
            headerLeft: navigation => (
              <TouchableOpacity
                onPress={() => console.log('left header clicked')}>
                <Icon
                  name="bars"
                  size={30}
                  color="white"
                  style={{margin: 10}}
                />
              </TouchableOpacity>
            ),
            headerRight: navigation => (
              <TouchableOpacity
                onPress={() => console.log('right header clicked')}>
                <Icon
                  name="shopping-cart"
                  size={30}
                  color="white"
                  style={{margin: 10}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}
