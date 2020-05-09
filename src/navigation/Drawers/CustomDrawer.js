import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
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

  labelSignOutOnClick = async () => {
    const userToken = await new UserUseCase().getUserToken();
    if (userToken != null) {
      await new UserUseCase().signOutUser();
      Alert.alert(strings.drawer.signOutMess);
    } else {
      Alert.alert(strings.drawer.signInRequireMess);
    }
  };

  labelLoginOnClick = async () => {
    const userToken = await new UserUseCase().getUserToken();
    if (userToken != null) {
      Alert.alert(strings.drawer.signedInMess);
    } else {
      this.props.navigation.navigate('login');
    }
  };

  render() {
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
          onPress={() => this.labelSignOutOnClick()}
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
