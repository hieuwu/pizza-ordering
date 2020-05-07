import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../views/ProductList/ProductList.screen';
import headerStyle from '../navigation/Header.style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../resources/colors'
import string from '../resources/strings'
import dimension from '../resources/dimensions'
import { StyleSheet } from 'react-native';
import ProductDetailScreen from '../views/ProductDetail/ProductDetail.screen';
import ProfileScreen from '../views/Profile/Profile.screen';
const stack = createStackNavigator();
export default class ProfileStack extends Component {
    render() {
        return (
            <stack.Navigator initialRouteName='Profile' screenOptions={headerStyle}>
                <stack.Screen name='Profile' component={ProfileScreen}
                    options={{
                        title: string.listScreenTitle,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => alert('This is a button!')}
                                style={styles.headerButton}>
                                <Ionicons name='ios-cart' color={color.white} size={dimension.iconSize} />
                            </TouchableOpacity>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={styles.headerButton}>
                                <Ionicons name='ios-list' color={color.white} size={dimension.iconSize} />
                            </TouchableOpacity>
                        ),
                    }} />
                <stack.Screen name='ProductDetail' component={ProductDetailScreen} options={{title: 'Detail'}}/>
            </stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    headerButton: {
        backgroundColor: color.mainColor,
        padding: 5,
        width: dimension.headerButton,
        height: dimension.headerButton,
        borderRadius: 64 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    }
})