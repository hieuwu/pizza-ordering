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
import {StringInput} from '../components/StringInput.js';
import postUserAPI from '../repository/postUserAPI.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import background from '../../assets/background.jpg';
import {AsyncStorage} from 'react-native';

class SignUpScreen extends Component {
  state = {
    isLoading: false,
    phone: '',
    password: '',
    confirmPassword: '',
    name: '',
    address: '',
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  CreateSignUpData = () => {
    const {phone, password, confirmPassword, name, address} = this.state;
    const phone_regex = /((09|03|07|08|05)+([0-9]{8,9})\b)/g;
    const password_regex = /^(?=.*\d)(?=.*[A-Za-z]).{6,20}$/;
    const checkPhone = phone_regex.test(phone);
    const checkPassword = password_regex.test(password);
    if (phone === '') {
      alert('Phone is required');
    } else if (checkPhone === false) {
      alert('Please enter a valid phone number');
    } else if (password === '') {
      alert('Password is required');
    } else if (password.length < 6 || password.length > 20) {
      alert('Password length must be between 6 and 20');
    } else if (checkPassword === false) {
      alert('Password must contain number and character');
    } else if (password !== confirmPassword) {
      alert('Confirm password and password must be the same');
    } else if (name === '') {
      alert('Name is required');
    } else if (address === '') {
      alert('Addess is required');
    } else {
      let SignUpData = {
        phone: phone,
        password: password,
        name: name,
        address: address,
      };
      this.setState({isLoading: true});
      this.SignUp(SignUpData);
    }
  };

  SignUp = async SignUpData => {
    try {
      let response = await postUserAPI('/user', SignUpData);
      //console.log(response.data)
      this.automaticLogIn(response.data);
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
      this.setState({isLoading: false});
    }
  };

  automaticLogIn = async userToken => {
    const {navigation, setUserToken} = this.props;
    await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
    setUserToken(userToken);
    alert('Sign up successfully!');
    navigation.pop(2);
    this.setState({isLoading: false});
  };

  checkInfo = () => {
    const {phone, password, confirmPassword, name, address} = this.state;
    const phone_regex = /((09|03|07|08|05)+([0-9]{8,9})\b)/g;
    const password_regex = /^(?=.*\d)(?=.*[A-Za-z]).{6,20}$/;
    const checkPhone = phone_regex.test(phone);
    const checkPassword = password_regex.test(password);
    if (phone === '') {
      return 'Phone is required'
    } else if (checkPhone === false) {
      return 'Please enter a valid phone number'
    } else if (password === '') {
      return 'Password is required'
    } else if (password.length < 6 || password.length > 20) {
      return 'Password length must be between 6 and 20'
    } else if (checkPassword === false) {
      return 'Password must contain number and character'
    } else if (password !== confirmPassword) {
      return 'Confirm password and password must be the same'
    } else if (name === '') {
      return 'Name is required'
    } else if (address === '') {
      return 'Addess is required'
    } else {
      return null
    }
  }

  render() {
    const {navigation} = this.props;
    const {phone, password, confirmPassword, name, address} = this.state;
    const checkInfoMessage=this.checkInfo()

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
              fontSize: 40,
              color: '#FFFFFF',
              marginBottom: 0.05 * Dimensions.get('window').height,
            }}>
            Join us!
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
          <StringInput
            text={confirmPassword}
            onTextChange={text => this.setState({confirmPassword: text})}
            placeholder={'Confirm password'}
            keyboard={'default'}
            isSecure={true}
          />
          <StringInput
            text={name}
            onTextChange={text => this.setState({name: text})}
            placeholder={'Your name'}
            keyboard={'default'}
            isSecure={false}
          />
          <StringInput
            text={address}
            onTextChange={text => this.setState({address: text})}
            placeholder={'Address'}
            keyboard={'default'}
            isSecure={false}
          />
          {checkInfoMessage!==null?
            <Text numberOfLines={2} style={textStyle.checkInfoMessage}>{checkInfoMessage}</Text>
          : null}
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
                this.CreateSignUpData();
              }}>
              <Text style={textStyle.orderNowButton}>Sign up</Text>
            </TouchableOpacity>
          )}
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
)(SignUpScreen);
