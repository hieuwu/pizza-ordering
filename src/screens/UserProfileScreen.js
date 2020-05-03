import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import TearLines from '../components/TearLines.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class UserProfileScreen extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
  };

  componentDidMount() {
    const {userToken} = this.props;
    const {user} = userToken;
    const {name, phone, address} = user;
    this.setState({name: name, phone: phone, address: address});
  }

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {name, phone, address} = this.state;

    return (
      <View style={[dimensionStyles.container, {backgroundColor: '#FFFFFF'}]}>
        <ScrollView>
          <View style={dimensionStyles.CheckOutHeaderContainer}>
            <TouchableOpacity
              style={dimensionStyles.goBackIconSignUpScreen}
              onPress={this.navigateBack}>
              <Icon name="angle-left" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={dimensionStyles.headerCategoryName}>
              <Text style={textStyle.headerCategoryName}>USER PROFILE</Text>
            </View>
            <View style={dimensionStyles.CheckOutHeaderInfo}>
              <View style={dimensionStyles.dashLineCheckOut} />
            </View>
          </View>
          <TearLines
            isUnder
            width={Dimensions.get('window').width}
            color="#e5293e"
          />
          <View style={dimensionStyles.orderInfoContainer}>
            <Text style={textStyle.OrderInfoField}>User's name</Text>
            <TextInput
              style={textStyle.StringInputCheckOut}
              onChangeText={text => this.setState({name: text})}
              keyboardType="default"
              secureTextEntry={false}
              value={name}
            />
            <Text style={textStyle.OrderInfoField}>User's phone number</Text>
            <TextInput
              style={textStyle.StringInputCheckOut}
              onChangeText={text => this.setState({phone: text})}
              keyboardType="number-pad"
              secureTextEntry={false}
              value={phone}
            />
            <Text style={textStyle.OrderInfoField}>User's address</Text>
            <TextInput
              style={textStyle.StringInputCheckOut}
              onChangeText={text => this.setState({address: text})}
              keyboardType="default"
              secureTextEntry={false}
              value={address}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

UserProfileScreen.propTypes = {
  userToken: PropTypes.object,
};

const mapStateToProps = state => ({
  userToken: state.userToken,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileScreen);
