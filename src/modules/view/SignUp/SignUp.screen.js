import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import styles from './SignUp.style';
import strings from '../../resources/strings/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../resources/colors/Colors';
import UserUseCase from '../../../UseCase/UserUseCase';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: strings.login.closeEye,
      showPassword: true,
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      password: '',
      confirmPassword: '',
      invalidFirstNameMess: '',
      invalidLastNameMess: '',
      invalidPhoneNumberMess: '',
      invalidEmailMess: '',
      invalidPasswordMess: '',
      invalidConfirmPasswordMess: '',
      signUpStatus: strings.signUp.signUpFailedMess,
      displayModal: false,
    };
  }

  isValidateAllInput() {
    return (
      this.checkName(this.state.firstName) &&
      this.checkName(this.state.lastName) &&
      this.checkEmail(this.state.email) &&
      this.checkPhoneNum(this.state.phoneNum) &&
      this.checkPassword(this.state.password) &&
      this.checkConfirmPassword(this.state.confirmPassword)
    );
  }

  updateErrorMess() {
    if (!this.checkName(this.state.firstName)) {
      this.setState({invalidFirstNameMess: strings.signUp.invalidNameMess});
    } else {
      this.setState({invalidFirstNameMess: ''});
    }
    if (!this.checkName(this.state.lastName)) {
      this.setState({invalidLastNameMess: strings.signUp.invalidNameMess});
    } else {
      this.setState({invalidLastNameMess: ''});
    }
    if (!this.checkEmail(this.state.email)) {
      this.setState({invalidEmailMess: strings.signUp.invalidEmailMess});
    } else {
      this.setState({invalidEmailMess: ''});
    }
    if (!this.checkPassword(this.state.phoneNum)) {
      this.setState({
        invalidPhoneNumberMess: strings.signUp.invalidPhoneNumMess,
      });
    } else {
      this.setState({invalidPhoneNumberMess: ''});
    }
    if (!this.checkPassword(this.state.password)) {
      this.setState({invalidPasswordMess: strings.signUp.invalidPassMess});
    } else {
      this.setState({invalidPasswordMess: ''});
    }
    if (!this.checkConfirmPassword(this.state.confirmPassword)) {
      this.setState({
        invalidConfirmPasswordMess: strings.signUp.invalidConfirmPassMess,
      });
    } else {
      this.setState({invalidConfirmPasswordMess: ''});
    }
  }

  async btnSignUpOnClick() {
    this.updateErrorMess();
    if (this.isValidateAllInput()) {
      // doing sing up promise
      let userData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNum: this.state.phoneNum,
        password: this.state.password,
      };
      let signUpResponse = await new UserUseCase().signUpUser(userData);
      if (String(signUpResponse.status) === 201) {
        // sign in user :
        let signInData = {
          email: this.state.email,
          password: this.state.password,
        };
        let signInResponse = await new UserUseCase().signInUser(signInData);
        await new UserUseCase().saveUserInfo(signInResponse.data);
        let currentUser = await new UserUseCase().getUserInfo();
        console.log('current user data : ' + currentUser);
      }
    } else {
      this.setState({displayModal: true});
    }
  }

  changeIcon() {
    this.setState({
      icon:
        this.state.icon === strings.login.openEye
          ? strings.login.closeEye
          : strings.login.openEye,
    });
  }

  togglePasswordSwitch() {
    this.setState({showPassword: !this.state.showPassword});
    this.changeIcon();
  }

  checkName = inName => {
    if (inName.length < 1) {
      return false;
    } else {
      return true;
    }
  };

  checkConfirmPassword = confirmPass => {
    return this.state.password === confirmPass;
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
        <Modal
          animationType="slide"
          visible={this.state.displayModal}
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.signUpStatusTxt}>
                {this.state.signUpStatus}
              </Text>
              <TouchableOpacity
                style={styles.btnOkContainer}
                onPress={() => {
                  this.setState({displayModal: false});
                }}>
                <Text style={styles.txtOk}>{strings.login.okTxt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Sign Up</Text>
          <ScrollView style={styles.txtInputContainer}>
            <Input
              placeholder={strings.signUp.txtFirstNamePlaceholder}
              errorMessage={this.state.invalidFirstNameMess}
              onChangeText={inputFirstName =>
                this.setState({firstName: inputFirstName})
              }
            />
            <Input
              placeholder={strings.signUp.txtLastNamePlaceholder}
              errorMessage={this.state.invalidLastNameMess}
              onChangeText={inputLastName =>
                this.setState({lastName: inputLastName})
              }
            />
            <Input
              placeholder={strings.signUp.txtEmailPlaceholder}
              errorMessage={this.state.invalidEmailMess}
              onChangeText={inputEmail => this.setState({email: inputEmail})}
            />
            <Input
              placeholder={strings.signUp.txtPhoneNumberPlaceholder}
              errorMessage={this.state.invalidPhoneNumberMess}
              onChangeText={inputPhoneNum =>
                this.setState({phoneNum: inputPhoneNum})
              }
            />
            <View style={styles.passwordContainer}>
              <Input
                placeholder={strings.signUp.txtPasswordPlaceholder}
                secureTextEntry={this.state.showPassword}
                errorMessage={this.state.invalidPasswordMess}
                onChangeText={password => this.setState({password: password})}
              />
              <TouchableOpacity
                onPress={() => {
                  this.togglePasswordSwitch();
                }}>
                <Icon name={this.state.icon} size={20} color={colors.black} />
              </TouchableOpacity>
            </View>
            <Input
              placeholder={strings.signUp.txtConfirmPasswordPlaceholder}
              secureTextEntry={this.state.showPassword}
              errorMessage={this.state.invalidConfirmPasswordMess}
              onChangeText={confirmPassword =>
                this.setState({confirmPassword: confirmPassword})
              }
            />
          </ScrollView>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.btnSignUpOnClick();
            }}>
            <Text style={styles.btnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.endTxt}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('login')}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
