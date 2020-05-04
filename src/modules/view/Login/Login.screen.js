import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Button,
} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './Login.style';
import colors from '../../resources/colors/Colors';
import dimensions from '../../resources/dimensions/Dimensions';
import strings from '../../resources/strings/strings';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      icon: 'eye-slash',
      showPassword: true,
      email: '',
      password: '',
      emailInvalidMess: '',
      passInvalidMess: '',
      loginStatus: 'Sign in failed',
      displayModal: false,
    };
  }

  updateEmailErrorMess = input => {
    if (this.checkEmail(input)) {
      this.setState({emailInvalidMess: ''});
    } else {
      this.setState({emailInvalidMess: 'Invalid email'});
    }
  };

  updatePasswordErrorMess = inputPass => {
    if (this.checkPassword(inputPass)) {
      this.setState({passInvalidMess: ''});
    } else {
      this.setState({passInvalidMess: 'Invalid password'});
    }
  };

  checkPassword = password => {
    if (password.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  checkEmail = email => {
    let emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRe.test(
      String(email)
        .toLowerCase()
        //remove redundant space:
        .replace(/\s/g, ''),
    );
  };

  checkPhoneNum = phoneNum => {
    let phoneNumRe = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return phoneNumRe.test(String(phoneNum));
  };

  signInOnClick() {
    this.updateEmailErrorMess(this.state.email);
    this.updatePasswordErrorMess(this.state.password);
    if (
      this.checkEmail(this.state.email) &&
      this.checkPassword(this.state.password)
    ) {
      // do login here
    } else {
      this.setState({displayModal: true});
    }
  }

  changeIcon() {
    this.setState({icon: this.state.icon === 'eye' ? 'eye-slash' : 'eye'});
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
    this.changeIcon();
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: null,
      headerTransparent: true,
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      headerLeft: navigation => (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <HeaderIcon iconName="arrow-left" />
        </TouchableOpacity>
      ),
    });
  }

  componentDidMount() {
    this.setHeaderBar();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subView}>
          <Modal
            animationType="slide"
            visible={this.state.displayModal}
            transparent={true}
            onRequestClose={() => {
              console.log('modal close');
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.loginStatusTxt}>
                  {this.state.loginStatus}
                </Text>
                <Button
                  title="OK"
                  onPress={() => {
                    this.setState({displayModal: false});
                  }}
                />
              </View>
            </View>
          </Modal>
          <Text style={styles.subTxt}>Login</Text>
          <View style={styles.txtInputContainer}>
            <Input
              placeholder="Email/Phone number"
              errorMessage={this.state.emailInvalidMess}
              onChangeText={inputEmail => this.setState({email: inputEmail})}
            />
          </View>
          <View style={styles.txtInputContainer}>
            <Input
              placeholder="Password"
              secureTextEntry={this.state.showPassword}
              errorMessage={this.state.passInvalidMess}
              onChangeText={password => this.setState({password: password})}
            />
            <TouchableOpacity
              onPress={() => {
                this.toggleSwitch();
              }}>
              <Icon name={this.state.icon} size={20} color={'black'} />
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                this.signInOnClick();
                Keyboard.dismiss();
              }}>
              <Text style={styles.btnTxt}>LOGIN</Text>
            </TouchableOpacity>
          </TouchableWithoutFeedback>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
