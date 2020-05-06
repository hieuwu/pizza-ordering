import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Shipping.style';
import colors from '../../resources/colors/Colors';
import strings from '../../resources/strings/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import TearLine from '../../../components/TearOffHeader/TearLine.component';
import {connect} from 'react-redux';
import UserInfo from '../../../components/UserInfo/UserInfo.component';
import {Input} from 'react-native-elements';

const mockData = {
  firstName: 'Nam',
  lastName: 'Le',
  phoneNum: '0932071087',
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
    return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

  componentDidMount() {
    this.setHeaderBar();
    this.mockUserData();
    this.getCurrentDate();
    this.summaryPrice();
  }

  btnContinueOnClick = totalBill => {
    console.log('checkout data : ', this.state.data);
    this.props.navigation.navigate('checkout', {
      checkOutPrice: totalBill,
      checkOutDate: this.state.billDate,
      userInfo: this.state.data,
      userAddress: this.state.enterAddress,
    });
  };

  render() {
    const {jobs} = this.props;
    const totalBill = this.summaryPrice();
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 16,
              fontSize: 30,
              fontWeight: 'bold',
              color: colors.white,
            }}>
            SHIPPING ORDER
          </Text>
          <View style={styles.billInfoView}>
            <View style={styles.billLineContainer}>
              <Text style={styles.headerTxt}>{strings.checkOut.txtData}</Text>
              <Text style={styles.headerTxt}> {this.state.billDate} </Text>
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
        <ScrollView style={styles.mainView}>
          <View style={styles.userInfoView}>
            <UserInfo userData={this.state.data} />
            <View style={styles.itemContainer}>
              <Input
                placeholder={'enter shipping address'}
                onChangeText={inputAddress =>
                  this.setState({enterAddress: inputAddress})
                }
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => this.btnContinueOnClick(totalBill)}>
            <Text style={styles.continueBtnText}> CONTINUE </Text>
            <Icon name="arrow-circle-right" size={30} color={colors.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.goBackBtn}
            onPress={() => this.props.navigation.navigate('cart')}>
            <Icon name="arrow-circle-left" size={30} color={colors.black} />
            <Text style={styles.goBackBtnText}> GO BACK </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps)(Shipping);
