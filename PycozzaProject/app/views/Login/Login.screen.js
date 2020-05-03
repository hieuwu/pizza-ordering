import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import color from '../../resources/colors';
import { Button, Input } from 'react-native-elements';
import string from '../../resources/strings'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style'
import UserUseCase from '../../usecase/UserUseCase'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            modalVisible: false,
            failedMessage: 'Sign in failed',
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

    isValidPassword = (password) => {
        if ((password.length > 7) && (password.length < 17)) {
            return true;
        }
        return false;
    }

    checkPassword = () => {
        if (this.isValidPassword(this.state.password)) {
            this.setState({ passwordError: '' })

        } else {
            this.setState({ passwordError: 'Invalid password' })
        }
    }

    checkEmail = () => {
        if (this.isValidEmail(this.state.email)) {
            this.setState({ emailError: '' });
        } else {
            this.setState({ emailError: 'Invalid email' });
        }
    }

    loginAccount = async () => {
        this.checkEmail();
        this.checkPassword();
        if (this.isValidEmail(this.state.email) && this.isValidPassword(this.state.password)) {
            let loginForm = {
                email: this.state.email,
                password: this.state.password,
            };
            let loginResponse = await new UserUseCase().loginAccount(loginForm);
            if (String(loginResponse.data).length > 0 ) {
                this.setState({
                    modalVisible: true,
                    failedMessage: 'Sign in successfully'
                });
                await new UserUseCase().saveUserInformation(loginResponse.data);
            }
            else {
                this.setState({
                    modalVisible: true,
                    failedMessage: 'Sign in failed !'
                });            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1, }}>
                        <View style={styles.modalView}>
                            <Text style={styles.textStyle}>{this.state.failedMessage}</Text>
                            <Button
                                title='OK'
                                buttonStyle={styles.okButton}
                                onPress={() => {
                                    this.setState({ modalVisible: false });
                                    this.props.navigation.goBack();
                                }}
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View>
                    <Input inputContainerStyle={styles.textInput} onChangeText={text => this.setState({ email: text })}
                        errorMessage={this.state.emailError} placeholder={string.promptEmail} />
                </View>
                <View>
                    <Input inputContainerStyle={styles.textInput} style={styles.textInput} secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}
                        placeholder={string.promptPassword}
                        errorMessage={this.state.passwordError} />
                </View>
                <Button title={string.buttonSignIn}
                    buttonStyle={styles.buttonLogin} onPress={() => this.loginAccount()} />
                <Button title={string.buttonSignUp} type="outline" buttonStyle={{ backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15, marginBottom: 30 }} onPress={() => this.props.navigation.navigate('Register')} />
            </View>
        )
    }
}