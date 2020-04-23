import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback } from 'react-native'
import color from '../../resources/colors';
import { Button, Input } from 'react-native-elements';
import string from '../../resources/strings'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            firstnameError: '',
            lastnameError: '',
            phoneError: '',
            emailError: '',
            passwordError: '',
        }
    }

    isValidEmail = (email) => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(String(email).toLowerCase()))
            return true;
        if (email.length < 1)
            return false;
        return false;
    }

    isValidName = (name) => {
        let pattern = /^[A-Za-z]+$/;
        if (pattern.test(String(name))) {
            return true;
        }
        return false;
    }

    isValidPhoneNumber = (phone) => {
        let pattern = /^[0-9]*$/;
        if (pattern.test(phone) && (phone.length == 10))
            return true;
        return false;
    }

    isValidPassword = (password) => {
        if ((password.length > 7) && (password.length < 17)) {
            return true;
        }
        return false;
    }

    checkPassword = () => {
        if (this.isValidPassword(this.state.password)) {

        } else {
            console.log("Wrong password");
        }
    }

    checkPhoneNumber = () => {
        if (this.isValidPhoneNumber(this.state.phone)) {

        } else {
            console.log("Wrong number");
        }
    }

    checkName = () => {
        if (this.isValidName(this.state.firstName)) {

        } else {
            console.log('Wrong name');
        }
    }

    checkEmail = () => {
        if (this.isValidEmail(this.state.email)) {
        } else {
            this.setState({ errorMessage: 'Invalid value' });
            console.log("Wrong email");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Input inputContainerStyle={styles.textInput} onChangeText={text => this.setState({ email: text })} errorMessage={this.state.errorMessage} placeholder={string.promptEmail} />
                </View>
                <View>
                    <Input inputContainerStyle={styles.textInput} style={styles.textInput} secureTextEntry={true} onChangeText={text => this.setState({ password: text })} placeholder={string.promptPassword} />
                </View>
                <Button title={string.buttonSignIn} buttonStyle={{ backgroundColor: color.mainColor, marginHorizontal: 15, borderRadius: 15, marginVertical: 15, }} />
                <Button title={string.buttonSignUp} type="outline" buttonStyle={{ backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15, marginBottom: 30 }} onPress={() => this.props.navigation.navigate('Register')} />
            </View>
        )
    }
}