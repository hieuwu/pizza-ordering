import React, { Component, useState } from 'react'
import color from '../resources/colors'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import dimension from '../resources/dimensions';
import string from '../resources/strings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addUser,removeUser } from '../../redux/actions/index';
class CustomDrawerContent extends Component {
  render() {
    const {removeUser} = this.props;
    return (
      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => { return (<Ionicons color={color.white} size={dimension.iconSize} name='ios-log-out' />) }}
          labelStyle={styles.labelStyle}
          label={string.categories.pizza} onPress={() => removeUser()} />
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: dimension.itemTitleSize,
    fontWeight: 'bold'
  }
})

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomDrawerContent)