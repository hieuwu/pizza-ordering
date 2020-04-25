import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import ProductStack from './Product.stack'
import CustomDrawerContent from './CustomDrawerContent'
import LoginScreen from '../views/Login/Login.screen';
import color from '../resources/colors';
import HomeScreen from '../views/Home/Home.screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import dimension from '../resources/dimensions';
import HomeStack from '../navigation/Home.stack'
const Drawer = createDrawerNavigator();
export default function MainMenuDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{ labelStyle: {color:color.white, fontSize: dimension.itemTitleSize, fontWeight: 'bold' }  }}
            initialRouteName='Home'
            drawerStyle={{ backgroundColor: color.mainColor }} >
            <Drawer.Screen  options={{
                drawerIcon: () => (
                    <Ionicons  color={color.white} size={dimension.iconSize} name='ios-home'/>)
            }}
            name='Home' component={HomeStack} />
        </Drawer.Navigator>
    )

}
