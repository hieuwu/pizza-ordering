import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LoginScreen/Login.screen';
import RegisterScreen from '../views/RegisterScreen/Register.screen'
const stack = createStackNavigator();
export default class AuthenStack extends Component {
    render() {
        return (
            <stack.Navigator initialRouteName='Login'>
                <stack.Screen name='Login' component={LoginScreen}/>
                <stack.Screen name='Register' component={RegisterScreen}/>
            </stack.Navigator>
        )
    }
}