import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './Categories.style'
import string from '../../resources/strings'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AppConfig from '../../config/AppConfig';

export default class CategoriesScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductList', {title: string.categories.pizza, type:'1'})}>
                    <ImageBackground style={styles.imageStyle} source={require('../../resources/images/category-pizza.jpg')}>
                        <Text style={styles.title}>
                            {string.categories.pizza}
                        </Text>
                    </ImageBackground>
                    </TouchableOpacity  >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductList', {title: string.categories.sidedish, type: '2'})}>
                    <ImageBackground style={styles.imageStyle} source={require('../../resources/images/category-sidedish.jpg')}>
                        <Text style={styles.title}>
                            {string.categories.sidedish}
                        </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductList', {title: string.categories.dessert, type: '3'})}>
                    <ImageBackground style={styles.imageStyle} source={require('../../resources/images/category-dessert.jpg')}>
                        <Text style={styles.title}>
                            {string.categories.dessert}
                        </Text>
                    </ImageBackground>
                    </TouchableOpacity >
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('ProductList', {title: string.categories.beverage, type: '4'})}>
                    <ImageBackground style={styles.imageStyle} source={require('../../resources/images/category-beverage.jpg')}>
                        <Text style={styles.title}>
                            {string.categories.beverage}
                        </Text>
                    </ImageBackground>
                    </TouchableOpacity>
            </ScrollView >
        )
    }
}
