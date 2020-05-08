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
import {Formik} from 'formik';
import * as yup from 'yup';
import SplashScreen from '../Splash.screen';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      icon: strings.login.closeEye,
      showPassword: true,
      loginStatus: strings.login.loginStatusFailedMess,
      displayModal: false,
      isLoading: false,
    };
  }

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

  async signInOnClick(values) {
    this.setState({isLoading: true});
    if (
      this.checkEmail(values.emailorphone) ||
      this.checkPhoneNum(values.emailorphone)
    ) {
      try {
        let loginResponse = await new UserUseCase().signInUser(values);
        this.setState({isLoading: false});
        this.setState({displayModal: false});
        console.log('save user information');
        await new UserUseCase().saveUserInfo(loginResponse.data.user);
        console.log('save user token');
        await new UserUseCase().saveUserToken(loginResponse.data.token);
        // navigate to checkout screen:
        console.log('login success');
        this.props.navigation.navigate('shipping');
      } catch (error) {
        console.log('login failed');
        this.setState({isLoading: false});
        this.setState({displayModal: true});
      }
    } else {
      // //navigate to checkout screen :
      console.log('set isLoading to : ' + this.state.isLoading);
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

  renderMainView = () => {
    if (this.state.isLoading !== true) {
      return (
        <View>
          <Formik
            initialValues={{emailorphone: '', password: ''}}
            onSubmit={values => {
              this.signInOnClick(values);
              Keyboard.dismiss();
            }}
            validationSchema={yup.object().shape({
              emailorphone: yup.string().required(),
              password: yup
                .string()
                .min(8)
                .required(),
            })}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
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
                    value={values.emailorphone}
                    onChangeText={handleChange('emailorphone')}
                    placeholder={strings.login.txtEmailPlaceholder}
                    onBlur={() => setFieldTouched('emailorphone')}
                    errorMessage={
                      touched.emailorphone ? errors.emailorphone : ''
                    }
                  />
                </View>
                <View style={styles.txtInputContainer}>
                  <Input
                    value={values.password}
                    placeholder={strings.login.txtPasswordPlaceholder}
                    secureTextEntry={this.state.showPassword}
                    errorMessage={touched.password ? errors.password : ''}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleSwitch();
                    }}>
                    <Icon
                      name={this.state.icon}
                      size={20}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback>
                  <TouchableOpacity
                    style={styles.btnLogin}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.btnTxt}>{strings.login.btnLogin}</Text>
                  </TouchableOpacity>
                </TouchableWithoutFeedback>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('signup')}>
                  <Text style={styles.signUpText}>
                    {strings.login.btnSingUp}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      );
    } else {
      return (
        <View>
          <SplashScreen />
        </View>
      );
    }
  };

  render() {
    let mainView = this.renderMainView();
    return <View style={styles.container}>{mainView}</View>;
  }
}
