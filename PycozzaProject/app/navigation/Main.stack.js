import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/Login/Login.screen';
import RegisterScreen from '../views/Register/Register.screen'
import headerStyle from '../navigation/Header.style'
import HomeScreen from '../views/Home/Home.screen';
import MainMenuDrawer from './MainMenu.drawer';
const stack = createStackNavigator();
export default class MainStack extends Component {
    render() {
        return (
            <stack.Navigator initialRouteName='Login' screenOptions={headerStyle}>
                <stack.Screen name='Home' component={HomeScreen} 
                 options={{
                    title: '',
                    headerTransparent: {
                        position: 'absolute',
                        backgroundColor: 'transparent',
                    },
                }}
                />
                <stack.Screen name='Main' component={MainMenuDrawer}
                    options={{
                        title: '',
                        headerTransparent: {
                            position: 'absolute',
                            backgroundColor: 'transparent',
                        },
                        headerLeft: null                        
                    }}
                />
            </stack.Navigator>
        )
    }
}