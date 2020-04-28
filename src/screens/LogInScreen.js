import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setUserToken} from '../redux/actions.js';
import {View, Text, TouchableOpacity} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {StringInput} from '../components/StringInput.js';
import postAPI from '../repository/postAPI.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AsyncStorage} from 'react-native';

class LogInScreen extends Component {
  state = {
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
  }

  CreateLogInData = () => {
    const {phone, password}=this.state;
    let LogInData={
      'phone': phone,
      'password': password, 
    }

    this.LogIn(LogInData)
  }

  LogIn = async (LogInData) => {
    const {setUserToken}=this.props
    try {
      let response = await postAPI('/user/login',LogInData);
      let userToken = response.data
      await AsyncStorage.setItem('userToken', JSON.stringify(userToken))
      setUserToken(userToken)
      alert('Log in successfully!')
      this.navigateBack()
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
  }

  render() {
  	const {phone, password} = this.state;

    return (
      <View style={dimensionStyles.container}>
        <TouchableOpacity
            style={dimensionStyles.goBackIconSignUpScreen}
            onPress={this.navigateBack}>
            <Icon name="angle-left" size={30} color="#0a1e2f" />
        </TouchableOpacity>
        <View style={dimensionStyles.containerCenter}>
          <Text>Log in screen</Text>
          <StringInput 
          	text={phone} 
          	onTextChange={(text)=>this.setState({phone: text})} 
          	playholder={'Your phone number'} 
          	keyboard={'number-pad'}
      	/>
          <StringInput 
  	        text={password} 
  	        onTextChange={(text)=>this.setState({password: text})} 
  	        playholder={'Password'} 
  	        keyboard={'default'}
          />
          <TouchableOpacity
            style={dimensionStyles.orderButtonDetailScreen}
            onPress={() => this.CreateLogInData()}>
            <Text style={textStyle.orderNowButton}>Log in</Text>
          </TouchableOpacity>
          <Text onPress={this.navigateToSignUpScreen}>Sign up</Text>
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