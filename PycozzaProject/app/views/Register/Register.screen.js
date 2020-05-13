import React, { Component } from 'react'
import { Text, View, AsyncStorage, Modal, TouchableHighlight, ScrollView } from 'react-native'
import color from '../../resources/colors';
import { Button, Input } from 'react-native-elements';
import string from '../../resources/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserUseCase from '../../usecase/UserUseCase';
import styles from './Register.style';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/index';
import dimension from '../../resources/dimensions'
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
            errorMessage: 'Sign up successfully',
            modalVisible: false,
            isSignedUp: false,
        }
    }

    validateForm = async () => {
        let validateInstance = new UserUseCase();
        this.checkEmail();
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
            let registerResponse = {};
            try {
                registerResponse = await new UserUseCase().registerAccount(registerForm);

            } catch (e) {
                console.log(e);
            }

            if (registerResponse.status === 201) {
                const { addUser } = this.props;
                let loginForm = {};
                loginForm.email = registerForm.email;
                loginForm.password = registerForm.password;
                let loginResponse = null;
                try {
                    loginResponse = await new UserUseCase().loginAccount(loginForm);

                } catch (e) {
                    console.log(e);
                }
                new UserUseCase().saveUserInformation(loginResponse.data);
                addUser(loginResponse.data);
                this.setState({isSignedUp: true});
                this.setState({ modalVisible: true });
            }
            else {
                this.setState({ errorMessage: 'This user is already existed' })
                this.setState({ modalVisible: true });
                return;
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

    checkPhoneNumber = () => {
        let validateInstance = new UserUseCase();
        if (validateInstance.isValidPhoneNumber(this.state.phone)) {
            this.setState({ phoneError: '' });
        } else {
            this.setState({ phoneError: 'Invalid phone' });
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
                            <Text style={styles.textStyle}>{this.state.errorMessage}</Text>
                            <Button
                                title='OK'
                                buttonStyle={styles.okButton}
                                onPress={() => {
                                    if (this.state.isSignedUp == true) {
                                        this.setState({ modalVisible: false });
                                        this.props.navigation.navigate('CartScreen');
                                    } else {
                                        this.setState({ modalVisible: false });
                                    }
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
                {this.state.modalVisible ? (<View style={{
                    backgroundColor: 'rgba(52, 52, 52, 0.8)', position: 'absolute',
                    height: dimension.window.height, width: dimension.window.width
                }} />) : (null)
                }
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