import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './UserInfo.style';
import strings from '../../modules/resources/strings/strings';
import TitleLine from '../../components/TitleLine/TitleLine.component';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TitleLine number={1} title={'Your information'} />
        <View style={styles.nameContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}>{strings.userInfo.firstName}</Text>
            <Text style={styles.txtContent}>
              {this.props.userData.firstName}
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}>{strings.userInfo.lastName}</Text>
            <Text style={styles.txtContent}>
              {this.props.userData.lastName}
            </Text>
          </View>
        </View>
        <View style={styles.userInfoDesContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}>{strings.userInfo.phoneNum}</Text>
            <Text style={styles.txtContent}>
              {this.props.userData.phoneNum}
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.txtTitle}>{strings.userInfo.email}</Text>
            <Text style={styles.txtContent}>{this.props.userData.email}</Text>
          </View>
        </View>
      </View>
    );
  }
}
