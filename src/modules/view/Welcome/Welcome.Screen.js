import React, {Component} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import welcomeStyle from './Welcome.style';
import strings from '../../resources/strings/strings';
import {connect} from 'react-redux';
import {addUser} from '../../../redux/actions/index';
import UserUseCase from '../../../UseCase/UserUseCase';

const localImage = require('../../resources/images/welcome03.jpg');

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      let userLocalToken = await new UserUseCase().getUserToken();
      let userLocalData = await new UserUseCase().getUserInfo();
      console.log(
        'welcome screen add user token from local : ' + userLocalToken,
      );
      console.log('welcome screen add user data from local : ', userLocalData);
      if (userLocalToken !== null) {
        addUser(userLocalToken);
      }
      const {userReducer} = this.props;
      console.log('user token from redux : ' + userReducer);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <View style={welcomeStyle.container}>
        <Image style={welcomeStyle.image} source={localImage} />
        <View style={welcomeStyle.titleContainer}>
          <Text style={welcomeStyle.restaurantText}>{strings.restaurant}</Text>
          <Text style={welcomeStyle.pizzaText}>{strings.name}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MainDrawer')}>
            <View style={welcomeStyle.buttonContainer}>
              <Text style={welcomeStyle.buttonText}>{strings.startOrder}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addUser: userToken => dispatch(addUser(userToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
