import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dimensionStyles} from '../resources/dimension.js';
import {string} from '../resources/string.js';
import {textStyle} from '../resources/textStyle.js';
import HomeImg from '../../assets/HomeImg.jpg';
import Logo from '../../assets/Logo.png';

export default class HomeScreen extends Component {
  navigateToCategoryScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('Category Screen');
  };
  render() {
    return (
      <View style={dimensionStyles.HomeContainer}>
        <StatusBar hidden />
        <ImageBackground
          style={dimensionStyles.HomeImg}
          source={HomeImg}
          resizeMode="cover"
        />
        <Image
          style={dimensionStyles.Logo}
          source={Logo}
          resizeMode="contain"
        />
        <View style={dimensionStyles.HomeNameContainer}>
          <Text style={textStyle.restaurant}>Restaurant</Text>
          <Text style={textStyle.restaurantName}>{string.restaurantName}</Text>
          <TouchableOpacity
            style={dimensionStyles.StartOrderButton}
            onPress={() => this.navigateToCategoryScreen()}>
            <Text style={textStyle.StartOrderButton}>START ORDER</Text>
            <View style={dimensionStyles.ArrowRightIconHome}>
              <Icon name="angle-right" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
