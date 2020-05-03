import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
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
      password: '',
      emailPhoneNum: '',
    };
  }

  signInOnClick() {
    console.log(this.state.emailPhoneNum);
    console.log(this.state.password);
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
          <Text style={styles.subTxt}>Login</Text>
          <TextInput
            style={styles.nameInput}
            placeholder="Email/Phone number"
            onChangeText={emailPhoneNum =>
              this.setState({emailPhoneNum: emailPhoneNum})
            }
          />
          <View style={styles.nameInput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={this.state.showPassword}
              onChangeText={password => this.setState({password: password})}
            />
            <TouchableOpacity
              onPress={() => {
                this.toggleSwitch();
              }}>
              <Icon name={this.state.icon} size={30} color={'black'} />
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
