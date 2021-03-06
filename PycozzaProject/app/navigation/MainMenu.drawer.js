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
import HomeStack from '../navigation/Home.stack';
import ProfileScreen from '../views/Profile/Profile.screen'
import ProfileStack from './Profile.stack'
import CartStack from './Cart.stack'
import CategoriesScreen from '../views/Categories/Categories.screen';
const Drawer = createDrawerNavigator();
const isShown = false;

export default class MainMenuDrawer extends Component {
    render() {
        return (
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
                drawerContentOptions={{ labelStyle: { color: color.white, fontSize: dimension.itemTitleSize, fontWeight: 'bold', } }}
                initialRouteName='Menu'
                drawerStyle={{ backgroundColor: color.mainColor }} >
                <Drawer.Screen options={{
                    drawerIcon: () => (
                        <Ionicons color={color.white} size={dimension.iconSize} name='ios-home' />)
                }}
                    name='Menu' component={HomeStack} />
                <Drawer.Screen options={{
                    drawerIcon: () => (
                        <Ionicons color={color.white} size={dimension.iconSize} name='ios-person' />)
                }}
                    name='Profile' component={ProfileStack} />
                <Drawer.Screen options={{
                    drawerIcon: () => (
                        <Ionicons color={color.white} size={dimension.iconSize} name='ios-cart' />
                       )
                }}
                    name='Cart' component={CartStack} />

            </Drawer.Navigator>
        )
    }

}