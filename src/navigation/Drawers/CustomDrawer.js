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
import {removeUser} from '../../redux/actions/index';
import {connect} from 'react-redux';

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  labelOnClick = async () => {
    const userToken = await new UserUseCase().getUserToken();
    if (userToken != null) {
      const {userReducer} = this.props;
      console.log(userReducer);
      await new UserUseCase().signOutUser();
      Alert.alert('User signed out');
      removeUser();
    } else {
      Alert.alert('You must sign in first');
    }
  };

  render() {
    const {removeUser} = this.props;
    return (
      <DrawerContentScrollView {...this.props}>
        <DrawerItemList {...this.props} />
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

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(removeUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDrawer);
