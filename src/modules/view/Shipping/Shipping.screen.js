import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from './Shipping.style';
import colors from '../../resources/colors/Colors';
import strings from '../../resources/strings/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import TearLine from '../../../components/TearOffHeader/TearLine.component';
import {connect} from 'react-redux';
import UserInfo from '../../../components/UserInfo/UserInfo.component';
import {Input} from 'react-native-elements';
import UserUseCase from '../../../UseCase/UserUseCase';

const mockData = {
  firstName: 'Man',
  lastName: 'Le',
  phoneNum: '124114',
  email: 'hoangnamele1998@gmail.com',
};

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billDate: '',
      data: '',
      enterAddress: '',
    };
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: null,
      headerTransparent: true,
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerLeft: null,
      headerRight: null,
    });
  }

  summaryPrice = () => {
    const {jobs} = this.props;
    let totalPrice = 0;

    if (jobs.length > 0) {
      jobs.forEach(element => {
        totalPrice += element.totalPrice;
      });
    } else {
      totalPrice = 0;
    }
    return totalPrice;
  };

  numberWithCommas(x) {
    return (
      x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + strings.appCurrency
    );
  }

  getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    this.setState({billDate: today});
    return today;
  };

  mockUserData() {
    this.setState({data: mockData});
  }

  async componentDidMount() {
    this.setHeaderBar();
    this.getCurrentDate();
    this.summaryPrice();
    let userData = await new UserUseCase().getUserInfo();
    this.setState({data: userData});
    const {userReducer} = this.props;
  }

  btnContinueOnClick = totalBill => {
    if (String(this.state.enterAddress).length > 0) {
      this.props.navigation.navigate('checkout', {
        checkOutPrice: totalBill,
        checkOutDate: this.state.billDate,
        userInfo: this.state.data,
        userAddress: this.state.enterAddress,
      });
    } else {
      Alert.alert('Please input address !');
    }
  };

  render() {
    const {jobs} = this.props;
    const totalBill = this.summaryPrice();
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>SHIPPING ORDER</Text>
          <View style={styles.billInfoView}>
            <View style={styles.billLineContainer}>
              <Text style={styles.headerTxt}>{strings.checkOut.txtData}</Text>
              <Text style={styles.headerTxt}>{this.state.billDate}</Text>
            </View>
            <View style={styles.billLineContainer}>
              <Text style={styles.headerTxt}>
                {strings.checkOut.txtTotalBill}
              </Text>
              <Text style={styles.headerTxt}>
                {this.numberWithCommas(totalBill)}
              </Text>
            </View>
          </View>
          <TearLine />
        </View>
        <View style={styles.mainView}>
          <View style={styles.userInfoView}>
            <UserInfo userData={this.state.data} />
            <View style={styles.itemContainer}>
              <Input
                placeholder={'Enter shipping address'}
                onChangeText={inputAddress =>
                  this.setState({enterAddress: inputAddress})
                }
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => this.btnContinueOnClick(totalBill)}>
          <Text style={styles.continueBtnText}>
            {strings.shipping.txtContinue}
          </Text>
          <Icon name="arrow-circle-right" size={30} color={colors.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => this.props.navigation.navigate('cart')}>
          <Icon name="arrow-circle-left" size={30} color={colors.black} />
          <Text style={styles.goBackBtnText}>{strings.shipping.txtGoBack}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps)(Shipping);
