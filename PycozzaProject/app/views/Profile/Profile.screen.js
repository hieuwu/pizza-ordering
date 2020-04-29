import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ColorPropType } from 'react-native';
import color from '../../resources/colors';
import diemension from '../../resources/dimensions';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Profile/Profile.style'
import OvalShape from '../../components/OvalShape.component';
export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <OvalShape/>
                <View style={styles.imageWrapper}>
                    <Image style={styles.imageStyle} source={{ uri: 'https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg' }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.titleStyle}>Peter Parker</Text>
                    </View>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.textWrapper}>
                        <Ionicons name='ios-call' size={diemension.iconSize} color={color.mainColor} />
                        <Text style={styles.contentStyle}>0963 877 417</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Ionicons name='ios-pin' size={diemension.iconSize} color={color.mainColor} />
                        <Text style={styles.contentStyle}>59 Y Nue Buon Ma Thuot</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Ionicons name='ios-mail' size={diemension.iconSize} color={color.mainColor} />
                        <Text style={styles.contentStyle}>someone@gmail.com</Text>
                    </View>
                </View>
            </View>
        )
    }
}
