import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import ThankYou from '../../assets/ThankYou.jpg';

export default class ThankYouScreen extends Component {
  navigateToHomeScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('Home Screen');
  };
  render() {
    return (
      <View style={dimensionStyles.HomeContainer}>
        <StatusBar hidden />
        <ImageBackground
          style={dimensionStyles.HomeImg}
          source={ThankYou}
          resizeMode="cover"
        />
        <View style={dimensionStyles.HomeNameContainer}>
          <TouchableOpacity
            style={dimensionStyles.BackHomeButton}
            onPress={() => this.navigateToHomeScreen()}>
            <Text style={textStyle.StartOrderButton}>BACK HOME</Text>
            <View style={dimensionStyles.ArrowRightIconHome}>
              <Icon name="angle-right" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
