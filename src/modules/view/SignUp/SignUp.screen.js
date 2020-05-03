import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import styles from './SignUp.style';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <Text style={styles.subTxt}>Sign Up</Text>
          <TextInput style={styles.nameInput} placeholder="First name" />
          <TextInput style={styles.nameInput} placeholder="Last name" />
          <TextInput style={styles.nameInput} placeholder="Email" />
          <TextInput style={styles.nameInput} placeholder="Phone number" />
          <TextInput style={styles.nameInput} placeholder="Password" />
          <TextInput style={styles.nameInput} placeholder="Confirm password" />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.endTxt}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('login')}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
