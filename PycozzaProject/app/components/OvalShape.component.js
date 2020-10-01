import React, { Component } from 'react'
import {View, StyleSheet } from 'react-native'
import dimension from '../resources/dimensions';
import color from '../resources/colors'
export default class OvalShape extends Component {
    render() {
        return (
            <View style={styles.ovalStyle}>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    ovalStyle: {
        width:dimension.window.height+ 100,
        height: dimension.window.height,
        backgroundColor: color.headerBackground,
        position: 'absolute',
        borderRadius: 400,
        top: -dimension.window.height/2 - 230,
        alignSelf: 'center'
    }
})


