import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import color from '../../resources/colors'
import { Button } from 'react-native-elements';
import dimension from '../../resources/dimensions';
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{ width: dimension.window.width, height: dimension.window.height, }}
                    source={
                        require('../../assets/images/home-background.jpg')
                    }
                >

                    <View style={{ alignItems: 'flex-start', marginTop: 'auto', marginBottom: 100, marginLeft: 30, }}>
                        <View style={{marginBottom: 20}}>
                            <Text style={styles.titleStyle}>PYCOZZA</Text>
                            <Text style={styles.subtitleStyle}>Choose your Pizza</Text>
                        </View>
                        <Button title='Start order    >' buttonStyle={{
                            backgroundColor: color.mainColor, borderRadius: 20, width: 160
                        }} titleStyle={{ marginLeft: 20 }} />
                    </View>
                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleStyle: {
        fontSize: 40,
        color: color.textColor
    },
    subtitleStyle: {
        fontSize: 17,
        color: color.textColor

    }
})