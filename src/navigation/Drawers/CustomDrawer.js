import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import colors from '../../modules/resources/colors/Colors';
import strings from '../../modules/resources/strings/strings';
import UserUseCase from '../../UseCase/UserUseCase';
import {connect} from 'react-redux';

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  labelOnClick = async () => {
    const userToken = await new UserUseCase().getUserToken();
    if (userToken != null) {
      await new UserUseCase().signOutUser();
      Alert.alert('User signed out');
    } else {
      Alert.alert('You must sign in first');
    }
  };

  labelLoginOnClick = async () => {
    const userToken = await new UserUseCase().getUserToken();
    if (userToken != null) {
      Alert.alert('You have been signed in');
    } else {
      this.props.navigation.navigate('login');
    }
  };

  render() {
    const {removeUser} = this.props;
    return (
      <DrawerContentScrollView {...this.props}>
        <DrawerItemList {...this.props} />
        <DrawerItem
          label="Sign in"
          labelStyle={styles.labelTxt}
          onPress={() => this.labelLoginOnClick()}
        />
        <DrawerItem
          label="Sign out"
          labelStyle={styles.labelTxt}
          onPress={() => this.labelOnClick()}
        />
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  labelTxt: {
    fontSize: 20,
    color: colors.white,
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDrawer);
