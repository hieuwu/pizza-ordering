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

function CustomDrawerContent(props, {navigation}) {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />  
          <DrawerItem
            icon={() => { return (<Ionicons color={color.white} size={dimension.iconSize} name='ios-pizza' />) }}
            labelStyle={styles.labelStyle}
            label={string.categories.pizza} onPress={() => navigation.navigate('Product')}/>
          <DrawerItem
            icon={() => { return (<MaterialCommunityIcons color={color.white} size={dimension.iconSize} name='bowl' />) }}
            labelStyle={styles.labelStyle}
            label={string.categories.sidedish} onPress={() => alert('Link to help')} />
          <DrawerItem
            icon={() => { return (<MaterialCommunityIcons color={color.white} size={dimension.iconSize} name='cake' />) }}
            labelStyle={styles.labelStyle}
            label={string.categories.dessert} onPress={() => alert('Link to help')} />
          <DrawerItem
            icon={() => { return (<Entypo color={color.white} size={dimension.iconSize} name='drink' />) }}
            labelStyle={styles.labelStyle}
            label={string.categories.beverage} onPress={() => alert('Link to help')} />
       
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: dimension.itemTitleSize,
    fontWeight: 'bold'
  }
})

export default CustomDrawerContent;