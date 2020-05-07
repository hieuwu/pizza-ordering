import React, { Component } from 'react'
import { Text, View, AsyncStorage, Modal, TouchableHighlight } from 'react-native'
import color from '../../resources/colors';
import { Button, Input } from 'react-native-elements';
import string from '../../resources/strings'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserUseCase from '../../usecase/UserUseCase';
import styles from './Register.style';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/index';
class RegisterScreen extends Component {
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
            errorMessage: 'Sign up successfull',
            modalVisible: false,
        }
    }

    validateForm = async () => {
        let validateInstance = new UserUseCase();
        this.checkEmail();
        this.checkName();
        this.checkPassword();
        this.checkPhoneNumber();
        this.checkConfirm();
        if (validateInstance.isValidName(this.state.fullName) && validateInstance.isValidPhoneNumber(this.state.phone)
            && validateInstance.isValidEmail(this.state.email) && validateInstance.isValidPassword(this.state.password)
            && validateInstance.isValidConfirm(this.state.password, this.state.confirmPassword)) {
            let registerForm = {};
            registerForm.fullName = this.state.fullName;
            registerForm.email = this.state.email;
            registerForm.phone = this.state.phone;
            registerForm.password = this.state.password;
            console.log(registerForm);
            let registerResponse = await new UserUseCase().registerAccount(registerForm);
            if (registerResponse.data.status === 201) {
                const { addUser } = this.props;
                let loginForm = {};
                loginForm.email = registerForm.email;
                loginForm.password = registerForm.password;
                let loginResponse = await new UserUseCase().loginAccount(loginForm);
                new UserUseCase().saveUserInformation(loginResponse.data);
                console.log("Register success with:", this.state.fullName);
                addUser(loginResponse.data);
                this.setState({ modalVisible: true });
            }
            else {
                if (registerResponse.data.status === 400) {
                    this.setState({ errorMessage: 'This user is already existed' })
                    return;
                }
                if (registerResponse.data.status === 409) {
                    this.setState({ errorMessage: 'This user is already existed' })
                    return;
                }
                console.log("Failed");
            }
        }
    }
    checkPassword = () => {
        let validateInstance = new UserUseCase();
        if (validateInstance.isValidPassword(this.state.password)) {
            this.setState({ passwordError: '' });
        } else {
            this.setState({ passwordError: 'Invalid password' });
        }
    }


    checkEmail = () => {
        let validateInstance = new UserUseCase();

        if (validateInstance.isValidEmail(this.state.email)) {
            this.setState({ emailError: '' });
        } else {
            this.setState({ emailError: 'Invalid email' });
        }
    }

    checkConfirm = () => {
        let validateInstance = new UserUseCase();
        if (validateInstance.isValidConfirm(this.state.password, this.state.confirmPassword)) {
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
                    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1, }}>
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
                        onPress={() => this.props.navigation.goBack()} />
                </ScrollView>
            </View>

        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterScreen)