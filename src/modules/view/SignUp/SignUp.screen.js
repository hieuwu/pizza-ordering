import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Input} from 'react-native-elements';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import styles from './SignUp.style';
import strings from '../../resources/strings/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../resources/colors/Colors';
import UserUseCase from '../../../UseCase/UserUseCase';
import {Formik} from 'formik';
import * as yup from 'yup';
import SplashScreen from '../Splash.screen';
import {connect} from 'react-redux';
import {addUser} from '../../../redux/actions/index';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: strings.login.closeEye,
      showPassword: true,
      signUpStatus: strings.signUp.signUpFailedMess,
      displayModal: false,
      isLoading: false,
    };
  }

  async btnSignUpOnClick(values) {
    this.setState({isLoading: true});
    // doing sing up promise
    let signUpData = JSON.parse(JSON.stringify(values));
    delete signUpData.confirmpassword;
    console.log('signUpData : ', signUpData);
    try {
      let signUpResponse = await new UserUseCase().signUpUser(signUpData);
      this.setState({isLoading: false});
      this.setState({displayModal: false});
      console.log('sign up response: ' + signUpResponse.status);
      if (signUpResponse.status === 201) {
        console.log('enter if 201 ');
        console.log('save user information');
        await new UserUseCase().saveUserInfo(signUpResponse.data.user);
        console.log('save user token');
        await new UserUseCase().saveUserToken(signUpResponse.data.token);
        console.log('save user token to redux');
        // navigate to login screen:
        console.log('sign up success');
        this.displaySignUpSucceeded();
      } else {
        this.displaySignUpFailed();
      }
    } catch (error) {
      this.displaySignUpFailed();
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
        <Formik
          initialValues={{
            phone: '',
            password: '',
            lastname: '',
            firstname: '',
            email: '',
            confirmpassword: '',
          }}
          onSubmit={values => {
            this.btnSignUpOnClick(values);
            Keyboard.dismiss();
          }}
          validationSchema={yup.object().shape({
            phone: yup
              .number()
              .moreThan(10)
              .required(),
            password: yup
              .string()
              .min(8)
              .required(),
            lastname: yup.string().required(),
            firstname: yup.string().required(),
            email: yup
              .string()
              .email('invalid email')
              .required(),
            confirmpassword: yup
              .string()
              .oneOf([yup.ref('password')], 'Pass word must match'),
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
            <View>
              <View style={styles.subView}>
                <Text style={styles.subTxt}>Sign Up</Text>
                <ScrollView style={styles.txtInputContainer}>
                  <Input
                    value={values.firstname}
                    onChangeText={handleChange('firstname')}
                    placeholder={strings.signUp.txtFirstNamePlaceholder}
                    onBlur={() => setFieldTouched('firstname')}
                    errorMessage={touched.firstname ? errors.firstname : ''}
                  />
                  <Input
                    value={values.lastname}
                    onChangeText={handleChange('lastname')}
                    placeholder={strings.signUp.txtLastNamePlaceholder}
                    onBlur={() => setFieldTouched('lastname')}
                    errorMessage={touched.lastname ? errors.lastname : ''}
                  />
                  <Input
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder={strings.signUp.txtEmailPlaceholder}
                    onBlur={() => setFieldTouched('email')}
                    errorMessage={touched.email ? errors.email : ''}
                  />
                  <Input
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    placeholder={strings.signUp.txtPhoneNumberPlaceholder}
                    onBlur={() => setFieldTouched('phone')}
                    errorMessage={touched.phone ? errors.phone : ''}
                  />
                  <View style={styles.passwordContainer}>
                    <Input
                      value={values.password}
                      onChangeText={handleChange('password')}
                      placeholder={strings.signUp.txtPasswordPlaceholder}
                      onBlur={() => setFieldTouched('password')}
                      secureTextEntry={this.state.showPassword}
                      errorMessage={touched.password ? errors.password : ''}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        this.togglePasswordSwitch();
                      }}>
                      <Icon
                        name={this.state.icon}
                        size={20}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </View>
                  <Input
                    value={values.confirmpassword}
                    onChangeText={handleChange('confirmpassword')}
                    placeholder={strings.signUp.txtPasswordPlaceholder}
                    onBlur={() => setFieldTouched('confirmpassword')}
                    secureTextEntry={this.state.showPassword}
                    errorMessage={
                      touched.confirmpassword ? errors.confirmpassword : ''
                    }
                  />
                </ScrollView>
                <TouchableOpacity
                  style={styles.btn}
                  disabled={!isValid}
                  onPress={handleSubmit}>
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
          )}
        </Formik>
      );
    } else {
      return (
        <View>
          <SplashScreen />
        </View>
      );
    }
  };

  btnModalOnClick = () => {
    this.setState({displayModal: false});
    if (this.state.signUpStatus === strings.signUp.signUpSucceededMess) {
      this.props.navigation.goBack();
    }
  };

  displaySignUpFailed() {
    this.setState({signUpStatus: strings.signUp.signUpFailedMess});
    this.setState({isLoading: false});
    this.setState({displayModal: true});
  }

  displaySignUpSucceeded() {
    this.setState({signUpStatus: strings.signUp.signUpSucceededMess});
    this.setState({isLoading: false});
    this.setState({displayModal: true});
  }

  render() {
    let mainView = this.renderMainView();
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
                  this.btnModalOnClick();
                }}>
                <Text style={styles.txtOk}>{strings.login.okTxt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {mainView}
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addUser: userToken => dispatch(addUser(userToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
