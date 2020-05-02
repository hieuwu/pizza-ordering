import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setUserToken} from '../redux/actions.js';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {string} from '../resources/string.js';
import {StringInput} from '../components/StringInput.js';
import postUserAPI from '../repository/postUserAPI.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AsyncStorage} from 'react-native';
import background from '../../assets/background.jpg';

class LogInScreen extends Component {
  state = {
    isLoading: false,
    phone: '',
    password: '',
  };

  navigateToSignUpScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('Sign Up Screen');
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  CreateLogInData = () => {
    const {phone, password} = this.state;
    let LogInData = {
      phone: phone,
      password: password,
    };

    this.LogIn(LogInData);
  };

  LogIn = async LogInData => {
    const {setUserToken} = this.props;
    try {
      let response = await postUserAPI('/user/login', LogInData);
      let userToken = response.data;
      await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
      setUserToken(userToken);
      alert('Log in successfully!');
      this.navigateBack();
    } catch (errorMessage) {
      if (errorMessage===401) {
        alert("Invalid user's phone number or password")
      } else {
        alert(errorMessage);
        console.log(errorMessage);
      }
    }
    this.setState({isLoading: false});
  };

  render() {
    const {phone, password} = this.state;

    return (
      <View style={dimensionStyles.container}>
        <ImageBackground
          style={dimensionStyles.HomeImg}
          source={background}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={dimensionStyles.goBackIconSignUpScreen}
          onPress={this.navigateBack}>
          <Icon name="angle-left" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={dimensionStyles.containerCenter}>
          <Text
            style={{
              fontSize: 30,
              color: '#FFFFFF',
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: '#FFFFFF',
              marginBottom: 0.1 * Dimensions.get('window').height,
            }}>
            {string.restaurantName}
          </Text>
          <StringInput
            text={phone}
            onTextChange={text => this.setState({phone: text})}
            placeholder={'Your phone number'}
            keyboard={'number-pad'}
            isSecure={false}
          />
          <StringInput
            text={password}
            onTextChange={text => this.setState({password: text})}
            placeholder={'Password'}
            keyboard={'default'}
            isSecure={true}
          />
          {this.state.isLoading ? (
            <TouchableOpacity
              style={dimensionStyles.LogInButton}
              disabled={true}>
              <Text style={textStyle.orderNowButton}>Please wait...</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={dimensionStyles.LogInButton}
              onPress={() => {
                this.setState({isLoading: true});
                this.CreateLogInData();
              }}>
              <Text style={textStyle.orderNowButton}>Log in</Text>
            </TouchableOpacity>
          )}
          <Text
            style={{
              marginTop: 0.1 * Dimensions.get('window').height,
              fontSize: 20,
              textAlign: 'center',
              color: '#FFFFFF',
              letterSpacing: 0.16,
              textDecorationLine: 'underline',
            }}
            onPress={this.navigateToSignUpScreen}>
            Sign up
          </Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserToken: userToken => dispatch(setUserToken(userToken)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LogInScreen);
