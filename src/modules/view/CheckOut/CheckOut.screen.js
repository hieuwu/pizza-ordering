import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import styles from './CheckOut.style';
import colors from '../../resources/colors/Colors';
import strings from '../../resources/strings/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import TearLine from '../../../components/TearOffHeader/TearLine.component';
import {connect} from 'react-redux';
import {removeCart} from '../../../redux/actions/index';
import CartUseCase from '../../../UseCase/CartUseCase';
import CartItem from '../../../components/CartItem/CartItem.component';
import UserInfo from '../../../components/UserInfo/UserInfo.component';
import TitleLine from '../../../components/TitleLine/TitleLine.component';
import {addItemToCart} from '../../../redux/actions/index';
import {ADD_ITEM_TO_CART} from '../../../redux/actions/type';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billDate: this.props.route.params.checkOutDate,
      displayModal: false,
      modalMessage: '',
    };
  }

  btnModalOnClick = () => {
    this.setState({displayModal: false});
    if (this.state.modalMessage === strings.checkOut.txtOrderSuccess) {
      this.props.navigation.navigate('categories');
    }
  };

  displayModalOrderSucceed() {
    this.setState({modalMessage: strings.checkOut.txtOrderSuccess});
    this.setState({displayModal: true});
  }

  btnConfirmationOnClick = async () => {
    const {removeCart} = this.props;
    await new CartUseCase().removeCart();
    removeCart();
    this.displayModalOrderSucceed();
  };

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

  numberWithCommas(x) {
    return (
      x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + strings.appCurrency
    );
  }

  async componentDidMount() {
    this.setHeaderBar();
    const {addItemToCart} = this.props;
    const {jobs} = this.props;
    if (jobs.length === 0) {
      let localCart = await new CartUseCase().getCurrentLocalCart();
      if (localCart !== '') {
        localCart.forEach(item => {
          item.type = ADD_ITEM_TO_CART;
          addItemToCart(item);
        });
      }
    }
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: strings.checkOut.txtCheckoutTitle,
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
      <View>
        <TitleLine number={2} title={strings.checkOut.txtYourOrder} />

        <FlatList
          style={styles.cartListView}
          data={jobs}
          renderItem={this.renderCartItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  displayEmptyListItem() {
    return (
      <View>
        <TitleLine number={2} title={strings.checkOut.txtYourOrder} />
        <View style={styles.txtEmptyContainer}>
          <Text style={styles.txtEmptyItem}>
            {strings.checkOut.txtEmptyCart}
          </Text>
          <Icon name="exclamation-triangle" size={40} color={colors.black} />
        </View>
      </View>
    );
  }

  displayConfirmBtn = () => {
    return (
      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() => this.btnConfirmationOnClick()}>
        <Text style={styles.confirmBtnText}>
          {strings.checkOut.txtConfirmBtn}
        </Text>
        <Icon name="check-circle" size={30} color={colors.icon} />
      </TouchableOpacity>
    );
  };

  render() {
    const {jobs} = this.props;
    let totalBill = this.props.route.params.checkOutPrice;
    const userInfo = this.props.route.params.userInfo;
    const userAddress = this.props.route.params.userAddress;
    let ListItemView, ConfirmBtn;
    if (jobs.length === 0) {
      ListItemView = this.displayEmptyListItem();
    } else {
      ListItemView = this.displayListItem(jobs);
      ConfirmBtn = this.displayConfirmBtn();
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.displayModal}
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.checkOutStatusTxt}>
                {this.state.modalMessage}
              </Text>
              <TouchableOpacity
                style={styles.btnOkContainer}
                onPress={() => {
                  this.btnModalOnClick();
                }}>
                <Text style={styles.txtOk}>{strings.login.okTxt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.headerContainer}>
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
        <ScrollView
          style={styles.mainView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.userInfoView}>
            <UserInfo userData={userInfo} />
            <View style={styles.itemContainer}>
              <Text style={styles.txtTitle}> {strings.userInfo.address} </Text>
              <Text style={styles.txtContent}>{userAddress}</Text>
            </View>
          </View>
          <View style={styles.cartListView}>{ListItemView}</View>
        </ScrollView>
        {ConfirmBtn}
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => this.props.navigation.navigate('shipping')}>
          <Icon name="arrow-circle-left" size={30} color={colors.black} />
          <Text style={styles.goBackBtnText}>
            {strings.checkOut.txtGoBackBtn}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: cartLine => dispatch(addItemToCart(cartLine)),
  removeCart: () => dispatch(removeCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckOut);
