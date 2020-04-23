import React, {Component, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import DropDownItem from 'react-native-drop-down-item';

export class NavigationPanel extends Component {
  state = {
    isDropDown: false,
  };

  static propTypes = {
    modalVisible: PropTypes.bool,
    onClose: PropTypes.func,
    onClickHome: PropTypes.func,
  };

  render() {
    const {
      modalVisible,
      onClose,
      onClickHome,
      onClickPizza,
      onClickPasta,
      onClickSalad,
      onClickDessert,
      onClickBeverage,
      onClickCart,
      onClickLogIn,
    } = this.props;
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => alert('Modal has been closed.')}>
        <View style={dimensionStyles.NavigationPanel}>
          <TouchableOpacity
            onPress={onClose}
            style={dimensionStyles.XIconNavigationPanel}>
            <Icon name="close" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClickHome}
            style={dimensionStyles.LineNavigationPanel}>
            <Icon name="home" size={36} color="#FFFFFF" />
            <Text style={textStyle.TextNavigationPanel}>Home</Text>
          </TouchableOpacity>
          {this.state.isDropDown ? (
            <>
              <View style={dimensionStyles.MenuLineNavigationPanel}>
                <TouchableOpacity
                  onPress={() => this.setState({isDropDown: false})}
                  style={dimensionStyles.LineNavigationPanel}>
                  <IconComunity
                    name="xbox-controller-menu"
                    size={36}
                    color="#FFFFFF"
                  />
                  <Text style={textStyle.TextNavigationPanel}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({isDropDown: false})}
                  style={dimensionStyles.DropDownMenuIcon}>
                  <Icon name="angle-up" size={36} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={onClickPizza}
                style={dimensionStyles.LineCategoryMenu}>
                <Icon5 name="pizza-slice" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Pizza</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClickPasta}
                style={dimensionStyles.LineCategoryMenu}>
                <IconEntypo name="bowl" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Pasta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClickSalad}
                style={dimensionStyles.LineCategoryMenu}>
                <Icon name="leaf" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Salad</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClickDessert}
                style={dimensionStyles.LineCategoryMenu}>
                <IconComunity name="cupcake" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Dessert</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClickBeverage}
                style={dimensionStyles.LineCategoryMenu}>
                <IconEntypo name="drink" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Beverage</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={dimensionStyles.MenuLineNavigationPanel}>
              <TouchableOpacity
                onPress={() => this.setState({isDropDown: true})}
                style={dimensionStyles.LineNavigationPanel}>
                <IconComunity
                  name="xbox-controller-menu"
                  size={36}
                  color="#FFFFFF"
                />
                <Text style={textStyle.TextNavigationPanel}>Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({isDropDown: true})}
                style={dimensionStyles.DropDownMenuIcon}>
                <Icon name="angle-down" size={36} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={onClickCart}
            style={dimensionStyles.LineNavigationPanel}>
            <Icon name="shopping-bag" size={36} color="#FFFFFF" />
            <Text style={textStyle.TextNavigationPanel}>Your Bag</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClickLogIn}
            style={dimensionStyles.LineNavigationPanel}>
            <IconEntypo name="login" size={36} color="#FFFFFF" />
            <Text style={textStyle.TextNavigationPanel}>Log In</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
