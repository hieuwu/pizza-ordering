import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import styles from './CheckOut.style';
import colors from '../../resources/colors/Colors';
import strings from '../../resources/strings/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import TearLine from '../../../components/TearOffHeader/TearLine.component';
import {connect} from 'react-redux';
import CartItem from '../../../components/CartItem/CartItem.component';
import UserInfo from '../../../components/UserInfo/UserInfo.component';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billDate: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      address: '',
    };
  }

  renderCartItem = ({item}) => (
    <View style={styles.cartLineContainer}>
      <CartItem
        pizzaTitle={item.title}
        imageUrl={item.imageUrl}
        pizzaSize={item.sizeType}
        pizzaCrust={item.crustType}
        pizzaCheese={item.cheeseType}
        quantity={item.quantity}
        totalPrice={item.totalPrice}
      />
    </View>
  );

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

  componentDidMount() {
    this.setHeaderBar();
    this.getCurrentDate();
    this.summaryPrice();
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: 'CHECK OUT',
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

  displayListItem = jobs => {
    return (
      <FlatList
        style={styles.cartListView}
        data={jobs}
        renderItem={this.renderCartItem}
        keyExtractor={item => item.id}
      />
    );
  };

  displayEmptyListItem() {
    return (
      <View style={styles.txtEmptyContainer}>
        <Text style={styles.txtEmptyItem}> Empty cart </Text>
        <Icon name="exclamation-triangle" size={40} color={colors.black} />
      </View>
    );
  }

  displayConfirmBtn = () => {
    return (
      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() => console.log('move to confirmation')}>
        <Text style={styles.confirmBtnText}> CONFIRM </Text>
        <Icon name="check-circle" size={30} color={colors.icon} />
      </TouchableOpacity>
    );
  };

  render() {
    const {jobs} = this.props;
    const totalBill = this.summaryPrice();
    let ListItemView, ConfirmBtn;
    if (jobs.length > 1) {
      ListItemView = this.displayListItem(jobs);
      ConfirmBtn = this.displayConfirmBtn();
    } else {
      ListItemView = this.displayEmptyListItem();
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
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
          <UserInfo />
          <View style={styles.cartListView}>{ListItemView}</View>
          {ConfirmBtn}
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

export default connect(mapStateToProps)(CheckOut);
