import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../../modules/resources/colors/Colors';

import CategoriesStack from '../Stacks/CategoriesStack';
import CartStack from '../Stacks/CartStack';

const Drawer = createDrawerNavigator();

export default class MainStack extends Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Categories"
        drawerStyle={{
          backgroundColor: colors.ovalColor,
          width: 250,
        }}
        drawerContentOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'yellow',
          labelStyle: {
            fontSize: 20,
            color: colors.text,
          },
        }}>
        <Drawer.Screen name="Home" component={CategoriesStack} />
        <Drawer.Screen name="Cart" component={CartStack} />
      </Drawer.Navigator>
    );
  }
}
