import React, { Component } from 'react'
import { Text, View, AsyncStorage, Modal, TouchableHighlight } from 'react-native'
import color from '../../resources/colors';
import { Button, Input } from 'react-native-elements';
import string from '../../resources/strings'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserUseCase from '../../usecase/UserUseCase';
import styles from './Register.style'
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            fullnameError: '',
            phoneError: '',
            emailError: '',
            passwordError: '',
            confirmError: '',
            modalVisible: false,
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
        if (pattern.test(name)) {
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

    isValidConfirm = (password, confirmPassword) => {
        if ((password === confirmPassword) && this.isValidPassword(password)) {
            return true;
        }
        return false;
    }



    validateForm = async () => {
        this.checkEmail();
        this.checkName();
        this.checkPassword();
        this.checkPhoneNumber();
        this.checkConfirm();
        if (this.isValidName(this.state.fullName) && this.isValidPhoneNumber(this.state.phone)
            && this.isValidEmail(this.state.email) && this.isValidPassword(this.state.password)
            && this.isValidConfirm(this.state.password, this.state.confirmPassword)) {
            let registerForm = {};
            registerForm.name = this.state.fullName;
            registerForm.email = this.state.email;
            registerForm.phone = this.state.phone;
            registerForm.password = this.state.password;
            console.log(registerForm);
            let registerResponse = await new UserUseCase().registerAccount(registerForm);
            if (registerResponse.data.status === 201) {
                let loginForm = {};
                loginForm.email = registerForm.email;
                loginForm.password = registerForm.password;
                let loginResponse = await new UserUseCase().loginAccount(loginForm);
                new UserUseCase().saveUserInformation(loginResponse.data);
                let currentUser = await new UserUseCase().getUserInformation();
                this.setState({ modalVisible: true });
                console.log("Current user: ", currentUser);
            }
            else {
                console.log("Failed");
            }
        }
    }

    checkPassword = () => {
        if (this.isValidPassword(this.state.password)) {
            this.setState({ passwordError: '' });

        } else {
            this.setState({ passwordError: 'Invalid password' });
        }
    }

    checkPhoneNumber = () => {
        if (this.isValidPhoneNumber(this.state.phone)) {
            this.setState({ phoneError: '' });

        } else {
            this.setState({ phoneError: 'Invalid phone' });
        }
    }

    checkName = () => {
        if (this.isValidName(this.state.fullName)) {
            this.setState({ fullnameError: '' });
        } else {
            this.setState({ fullnameError: 'Invalid name' });
        }
    }

    checkEmail = () => {
        if (this.isValidEmail(this.state.email)) {
            this.setState({ emailError: '' });

        } else {
            this.setState({ emailError: 'Invalid email' });
        }
    }

    checkConfirm = () => {
        if (this.isValidConfirm(this.state.password, this.state.confirmPassword)) {
            this.setState({ confirmError: '' });

        } else {
            this.setState({ confirmError: 'Invalid confirm password' });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                        <View style={{justifyContent: 'center', alignSelf: 'center', flex: 1,}}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>Sign up successfully</Text>
                        <Button
                            title='OK'
                            buttonStyle={styles.okButton}
                            onPress={() => {
                                this.setState({ modalVisible: false });
                                this.props.navigation.navigate('CartScreen');
                            }}
                        >
                        </Button>
                    </View>
                    </View>
                </Modal>

                <ScrollView>
                    <View>
                        <Input inputContainerStyle={styles.textInput}
                            onChangeText={text => this.setState({ fullName: text })}
                            placeholder={string.promptFullName}
                            errorMessage={this.state.fullnameError} />
                    </View>
                    <View>
                        <Input inputContainerStyle={styles.textInput} style={styles.textInput}
                            onChangeText={text => this.setState({ phone: text })}
                            placeholder={string.promptPhone}
                            errorMessage={this.state.phoneError} />
                    </View>
                    <View>
                        <Input inputContainerStyle={styles.textInput}
                            onChangeText={text => this.setState({ email: text })}
                            errorMessage={this.state.emailError}
                            placeholder={string.promptEmail} />
                    </View>
                    <View>
                        <Input inputContainerStyle={styles.textInput}
                            style={styles.textInput} secureTextEntry={true}
                            onChangeText={text => this.setState({ password: text })}
                            placeholder={string.promptPassword}
                            errorMessage={this.state.passwordError} />
                    </View>
                    <View>
                        <Input inputContainerStyle={styles.textInput} style={styles.textInput}
                            secureTextEntry={true}
                            onChangeText={text => this.setState({ confirmPassword: text })}
                            placeholder={string.promptConfirmPass}
                            errorMessage={this.state.confirmError} />
                    </View>
                    <Button title={string.buttonCreateAccount} buttonStyle={{ backgroundColor: color.mainColor, marginHorizontal: 15, borderRadius: 15, marginVertical: 15, }}
                        onPress={this.validateForm}
                    />
                    <Button title="Sign in" type="outline" buttonStyle={{ backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15, marginBottom: 30 }}
                        onPress={() => this.retrieveUserInfo()} />
                </ScrollView>
            </View>

        )
    }
}