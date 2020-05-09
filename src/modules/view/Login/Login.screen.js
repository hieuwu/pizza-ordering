import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Alert,
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
import {connect} from 'react-redux';
import {addUser} from '../../../redux/actions/index';

class Login extends Component {
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

  getUserToken = async () => {
    try {
      let userToken = await new UserUseCase().getUserToken();
      return userToken;
    } catch (error) {
      console.log(error.message);
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

  displaySignInFailed() {
    this.setState({loginStatus: strings.login.loginStatusFailedMess});
    this.setState({isLoading: false});
    this.setState({displayModal: true});
  }

  displaySignInSucceeded() {
    this.setState({loginStatus: strings.login.loginStatusSucceededMess});
    this.setState({isLoading: false});
    this.setState({displayModal: true});
  }

  async signInOnClick(values) {
    this.setState({isLoading: true});
    if (
      this.checkEmail(values.requiredEntry) ||
      this.checkPhoneNum(values.requiredEntry)
    ) {
      let loginResponse;
      try {
        console.log('login : data ', values);
        loginResponse = await new UserUseCase().signInUser(values);
        console.log('login response : ', loginResponse.status);
        if (loginResponse.status === 302) {
          console.log('save user information');
          await new UserUseCase().saveUserInfo(loginResponse.data.user);
          console.log('save user token');
          await new UserUseCase().saveUserToken(loginResponse.data.token);
          console.log('save user token to redux');
          const {addUser} = this.props;
          addUser(loginResponse.data.token);
          const {userReducer} = this.props;
          console.log('login : user token in redux ', userReducer);
          console.log('login success');
          this.displaySignInSucceeded();
        } else {
          this.displaySignInFailed();
        }
      } catch (error) {
        this.displaySignInFailed();
      }
    } else {
      this.displaySignInFailed();
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
            initialValues={{requiredEntry: '', password: ''}}
            onSubmit={values => {
              this.signInOnClick(values);
              Keyboard.dismiss();
            }}
            validationSchema={yup.object().shape({
              requiredEntry: yup.string().required(),
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
                    value={values.requiredEntry}
                    onChangeText={handleChange('requiredEntry')}
                    placeholder={strings.login.txtEmailPlaceholder}
                    onBlur={() => setFieldTouched('requiredEntry')}
                    errorMessage={
                      touched.requiredEntry ? errors.requiredEntry : ''
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addUser: userToken => dispatch(addUser(userToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
