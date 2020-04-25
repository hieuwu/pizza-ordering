import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dimensionStyles} from '../resources/dimension.js';
import {string} from '../resources/string.js';
import {textStyle} from '../resources/textStyle.js';
import HomeImg from '../../assets/HomeImg.jpg';

export default class HomeScreen extends Component {
  navigateToCategoryScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('Category Screen');
  };
  render() {
    return (
        <View style={dimensionStyles.HomeContainer}>        
          <ImageBackground
            style={dimensionStyles.HomeImg}
            source={HomeImg}
            resizeMode="cover"
          />
          <View style={dimensionStyles.HomeNameContainer}>
            <Text style={textStyle.restaurant}>Restaurant</Text>
            <Text style={textStyle.restaurantName}>{string.restaurantName}</Text>
            <TouchableOpacity
              style={dimensionStyles.StartOrderButton}
              onPress={()=>this.navigateToCategoryScreen()}>
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
