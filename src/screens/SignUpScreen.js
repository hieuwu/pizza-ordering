import React, {Component} from 'react';

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

export default class SignUpScreen extends Component {
  state = {
    isLoading: false,
    phone: '',
    password: '',
    name: '',
    address: '',
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  CreateSignUpData = () => {
    const {phone, password, name, address} = this.state;
    if (password.length < 6) {
      alert("Password is too short, it's length should be between 6 and 20");
      this.setState({isLoading: false});
    } else if (password.length > 20) {
      alert("Password is too long, it's length should be between 6 and 20");
      this.setState({isLoading: false});
    } else {
      let SignUpData = {
        phone: phone,
        password: password,
        name: name,
        address: address,
      };
      this.SignUp(SignUpData);
    }
  };

  SignUp = async SignUpData => {
    try {
      let response = await postUserAPI('/user', SignUpData);
      //console.log(response.data)
      alert('Sign up successfully!');
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
    this.setState({isLoading: false});
  };

  render() {
    const {navigation} = this.props;
    const {phone, password, name, address} = this.state;

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
