import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ColorPropType } from 'react-native';
import color from '../../resources/colors';
import diemension from '../../resources/dimensions';
import UserUsecase from '../../usecase/UserUseCase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Profile/Profile.style'
import OvalShape from '../../components/OvalShape.component';
export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            isSignedIn: false,
        }
    }
    async componentDidMount() {
        let currentUser = await new UserUsecase().getUserInformation();
        if (currentUser !== 'none') {
            this.setState({
                name: currentUser.name,
                phone: currentUser.phone,
                email: currentUser.email,
                isSignedIn: true,
            })
        }

    }
    render() {
        return (



            <View style={styles.container}>
                <OvalShape />
                {this.state.isSignedIn ? (
                    <View style={styles.container}>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.imageStyle} source={{ uri: 'https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg' }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.titleStyle}>{this.state.name}</Text>
                            </View>
                        </View>
                        <View style={styles.infoWrapper}>
                            <View style={styles.textWrapper}>
                                <Ionicons name='ios-call' size={diemension.iconSize} color={color.mainColor} />
                                <Text style={styles.contentStyle}>{this.state.phone}</Text>
                            </View>
                            <View style={styles.textWrapper}>
                                <Ionicons name='ios-mail' size={diemension.iconSize} color={color.mainColor} />
                                <Text style={styles.contentStyle}>{this.state.email}</Text>
                            </View>
                        </View>
                    </View>
                ) : (<View style={styles.container}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.imageStyle} source={{ uri: 'https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg' }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.titleStyle}>You have not logged in</Text>
                        </View>
                    </View>
                   
                </View>)}
            </View>
        )
    }
}
