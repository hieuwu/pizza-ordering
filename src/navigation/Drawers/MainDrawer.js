import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoriesStack from '../Stacks/CategoriesStack';

const Drawer = createDrawerNavigator();

export default class MainStack extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Categories">
        <Drawer.Screen name="Categories" component={CategoriesStack} />
      </Drawer.Navigator>
    );
  }
}
