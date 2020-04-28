import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {StringInput} from '../components/StringInput.js';
import postAPI from '../repository/postAPI.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUpScreen extends Component {
  state = {    
    phone: '',
    password: '',
    name: '',
    address: '',
  };

  CreateSignUpData = () => {
    const {phone, password, name, address}=this.state;
    let SignUpData={
      'phone': phone,
      'password': password, //check password length in button
      'name': name,
      'address': address,
    }

    this.SignUp(SignUpData)
  }

  SignUp = async (SignUpData) => {
    try {
      let response = await postAPI('/user',SignUpData);
      //console.log(response.data)
      alert('Sign up successfully!')
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
  }

  render() {
    const {navigation} = this.props;
  	const {phone, password, name, address} = this.state;

    return (
      <View style={dimensionStyles.container}>
        <TouchableOpacity
            style={dimensionStyles.goBackIconSignUpScreen}
            onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} color="#0a1e2f" />
        </TouchableOpacity>
        <View style={dimensionStyles.containerCenter}>
          
          <Text>Sign up screen</Text>
          <StringInput 
          	text={phone} 
          	onTextChange={(text)=>this.setState({phone: text})} 
          	placeholder={'Your phone number'} 
          	keyboard={'number-pad'}
      	  />
          <StringInput 
  	        text={password} 
  	        onTextChange={(text)=>this.setState({password: text})} 
  	        placeholder={'Password'} 
  	        keyboard={'default'}
          />
          <StringInput 
            text={name} 
            onTextChange={(text)=>this.setState({name: text})} 
            placeholder={'Your name'} 
            keyboard={'default'}
          />
          <StringInput 
            text={address} 
            onTextChange={(text)=>this.setState({address: text})} 
            placeholder={'Address'} 
            keyboard={'default'}
          />
          <TouchableOpacity
            style={dimensionStyles.orderButtonDetailScreen}
            onPress={() => this.CreateSignUpData()}>
            <Text style={textStyle.orderNowButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
