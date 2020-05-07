import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './Login.style';
import colors from '../../resources/colors/Colors';
import strings from '../../resources/strings/strings';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserUseCase from '../../../UseCase/UserUseCase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      icon: strings.login.closeEye,
      showPassword: true,
      email: '',
      password: '',
      emailInvalidMess: '',
      passInvalidMess: '',
      loginStatus: strings.login.loginStatusFailedMess,
      displayModal: false,
    };
  }

  updateEmailErrorMess = input => {
    if (this.checkEmail(input)) {
      this.setState({emailInvalidMess: ''});
    } else {
      this.setState({emailInvalidMess: strings.login.invalidEmailMess});
    }
  };

  updatePasswordErrorMess = inputPass => {
    if (this.checkPassword(inputPass)) {
      this.setState({passInvalidMess: ''});
    } else {
      this.setState({passInvalidMess: strings.login.invalidPassMess});
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

  async signInOnClick() {
    this.updateEmailErrorMess(this.state.email);
    this.updatePasswordErrorMess(this.state.password);
    if (
      // this.checkEmail(this.state.email) &&
      this.checkPassword(this.state.password)
    ) {
      let userData = {
        emailorphone: this.state.email,
        password: this.state.password,
      };
      let loginResponse = await new UserUseCase().signInUser(userData);
      console.log('login response is : ', loginResponse.data.token);
      if (String(loginResponse.data) > 0) {
        this.setState({displayModal: false});
        await new UserUseCase().saveUserInfo(userData);
        // navigate to checkout screen:
      }
    } else {
      // //navigate to checkout screen :
      // this.props.navigation.navigate('shipping');
      this.setState({displayModal: true});
      console.log('set modal to : ' + this.state.displayModal);
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
            transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.loginStatusTxt}>
                  {this.state.loginStatus}
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
          <Text style={styles.subTxt}>{strings.login.txtLoginTitle}</Text>
          <View style={styles.txtInputContainer}>
            <Input
              placeholder={strings.login.txtEmailPlaceholder}
              errorMessage={this.state.emailInvalidMess}
              onChangeText={inputEmail => this.setState({email: inputEmail})}
            />
          </View>
          <View style={styles.txtInputContainer}>
            <Input
              placeholder={strings.login.txtPasswordPlaceholder}
              secureTextEntry={this.state.showPassword}
              errorMessage={this.state.passInvalidMess}
              onChangeText={password => this.setState({password: password})}
            />
            <TouchableOpacity
              onPress={() => {
                this.toggleSwitch();
              }}>
              <Icon name={this.state.icon} size={20} color={colors.black} />
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                this.signInOnClick();
                Keyboard.dismiss();
              }}>
              <Text style={styles.btnTxt}>{strings.login.btnLogin}</Text>
            </TouchableOpacity>
          </TouchableWithoutFeedback>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.signUpText}>{strings.login.btnSingUp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
