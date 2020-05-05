import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './UserInfo.style';
import strings from '../../modules/resources/strings/strings';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.userInfoView}>
        <View style={styles.nameContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}> {strings.userInfo.firstName}</Text>
            <Text style={styles.txtContent}> Nam </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}> {strings.userInfo.lastName}</Text>
            <Text style={styles.txtContent}> Le</Text>
          </View>
        </View>
        <View style={styles.userInfoDesContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}> {strings.userInfo.phoneNum}</Text>
            <Text style={styles.txtContent}> 0932071076</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}> {strings.userInfo.email}</Text>
            <Text style={styles.txtContent}> hoangnamle1998@gmail.com </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}> {strings.userInfo.address} </Text>
            <Text style={styles.txtContent}>
              269/14/14 Ba Hom, Phuong 13, Quan 6, TP.HCM
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
