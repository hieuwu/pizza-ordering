import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/Login/Login.screen';
import RegisterScreen from '../views/Register/Register.screen'
import headerStyle from '../navigation/Header.style'
const stack = createStackNavigator();
export default class AuthenStack extends Component {
    render() {
        return (
            <stack.Navigator initialRouteName='Login'  screenOptions={headerStyle}>
                <stack.Screen name='Login' component={LoginScreen}/>
                <stack.Screen name='Register' component={RegisterScreen}/>
            </stack.Navigator>
        )
    }
}