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

function CustomDrawerContent(props) {
  const [isVisible, setIsVisible] = useState(false);
  function showhideComponent() {
    if (isVisible == true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <DrawerItem
          activeTintColor={color.white}
          icon={() => { return (<Ionicons color={color.white} size={dimension.iconSize} name='ios-list-box' />) }}
          labelStyle={styles.labelStyle}
          label="Menu" onPress={showhideComponent} >
        </DrawerItem>
        {isVisible ? (
          <TouchableOpacity onPress={showhideComponent}>
            <Ionicons color={color.white} size={dimension.iconSize} name='ios-arrow-up' />
          </TouchableOpacity>

        ) : (<TouchableOpacity onPress={showhideComponent}>
          <Ionicons color={color.white} size={dimension.iconSize} name='ios-arrow-down' />
        </TouchableOpacity>)}
      </View>
      {isVisible ? (
        <View style={{ marginLeft: 32 }}>
          <DrawerItem
            icon={() => { return (<Ionicons color={color.white} size={dimension.iconSize} name='ios-pizza' />) }}
            labelStyle={styles.labelStyle}
            label={string.categories.pizza} onPress={() => alert('Link to help')}/>
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
        </View>
      ) : null}
      <DrawerItem
        icon={() => { return (<Ionicons color={color.white} size={dimension.iconSize} name='md-call' />) }}
        labelStyle={styles.labelStyle}
        label="Contact us" onPress={() => alert('Link to help')} />
      <DrawerItem
        icon={() => { return (<Ionicons color={color.white} size={dimension.iconSize} name='ios-information-circle' />) }}
        labelStyle={styles.labelStyle}
        label="Policy" onPress={() => alert('Link to help')} />
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