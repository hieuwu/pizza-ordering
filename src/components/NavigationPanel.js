import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setUserToken} from '../redux/actions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {AsyncStorage} from 'react-native';

class NavigationPanel extends Component {
  state = {
    stateModalVisible: false,
    isDropDown: false,
    categoryPickerHeight: new Animated.Value(0),
    navigationPanelWidth: new Animated.Value(0),
  };

  scrollDown = () => {
    const {categoryData} = this.props;
    Animated.timing(this.state.categoryPickerHeight, {
      toValue: 65 * categoryData.length,
      duration: 300,
    }).start();
  }

  scrollUp = () => {
    const {categoryData} = this.props;
    Animated.timing(this.state.categoryPickerHeight, {
      toValue: 0,
      duration: 300,
    }).start();
  }

  slideFromLeft = () => {
    const w = Dimensions.get('window').width;
    Animated.timing(this.state.navigationPanelWidth, {
      toValue: 0.72 * w,
      duration: 300,
    }).start(this.setState({stateModalVisible: true})); //trigger when animation start
  }

  slideToLeft = () => {
    Animated.timing(this.state.navigationPanelWidth, {
      toValue: 0,
      duration: 300,
    }).start(() => this.setState({stateModalVisible: false})); //trigger when animation end
  }

  showMenu = ({item}) => {
    const {_id, title} = item;
    const {onClickMenu} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onClickMenu(_id, title)}
        style={dimensionStyles.LineCategoryMenu}>
        <Text style={textStyle.TextNavigationPanel}>{title}</Text>
      </TouchableOpacity>
    );
  };

  LogOut = async () => {
    const {setUserToken} = this.props;
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
    }
  };

  componentDidUpdate = () => {
    const {modalVisible} = this.props;
    const {stateModalVisible} = this.state;
    if (modalVisible!==stateModalVisible && modalVisible===true) {
      this.slideFromLeft()
    }
    if (modalVisible!==stateModalVisible && modalVisible===false) {
      this.slideToLeft()     
    }
  }

  render() {
    const {categoryData, userToken} = this.props;
    const {
      modalVisible,
      onClose,
      onClickHome,
      onClickCart,
      onClickLogIn,
      onClickUser,
      RequestClose,
    } = this.props;
    return (
      <>
        <StatusBar hidden={true} />
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.stateModalVisible}
          onRequestClose={RequestClose}>
          <Animated.View style={[dimensionStyles.NavigationPanel, {width: this.state.navigationPanelWidth}]}>
            <ScrollView>
              <TouchableOpacity
                onPress={onClose}
                style={dimensionStyles.XIconNavigationPanel}>
                <Icon name="close" size={30} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClickHome}
                style={dimensionStyles.LineNavigationPanel}>
                <Icon name="home" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Home</Text>
              </TouchableOpacity>
              {this.state.isDropDown ? (
                <>
                  <View style={dimensionStyles.MenuLineNavigationPanel}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({isDropDown: false});
                        this.scrollUp();
                      }}
                      style={dimensionStyles.LineNavigationPanel}>
                      <IconComunity
                        name="xbox-controller-menu"
                        size={36}
                        color="#FFFFFF"
                      />
                      <Text style={textStyle.TextNavigationPanel}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({isDropDown: false});
                        this.scrollUp();
                      }}
                      style={dimensionStyles.DropDownMenuIcon}>
                      <Icon name="angle-up" size={36} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <View style={dimensionStyles.MenuLineNavigationPanel}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({isDropDown: true});
                      this.scrollDown();
                    }}
                    style={dimensionStyles.LineNavigationPanel}>
                    <IconComunity
                      name="xbox-controller-menu"
                      size={36}
                      color="#FFFFFF"
                    />
                    <Text style={textStyle.TextNavigationPanel}>Menu</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.setState({isDropDown: true});
                      this.scrollDown();
                    }}
                    style={dimensionStyles.DropDownMenuIcon}>
                    <Icon name="angle-down" size={36} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              )}
              <Animated.View style={{height: this.state.categoryPickerHeight}}>
                <FlatList
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={categoryData}
                  keyExtractor={item => item._id}
                  renderItem={this.showMenu}
                />
              </Animated.View>
              <TouchableOpacity
                onPress={onClickCart}
                style={dimensionStyles.LineNavigationPanel}>
                <Icon name="shopping-cart" size={36} color="#FFFFFF" />
                <Text style={textStyle.TextNavigationPanel}>Your Cart</Text>
              </TouchableOpacity>
              {userToken === null ? (
                <TouchableOpacity
                  onPress={onClickLogIn}
                  style={dimensionStyles.LineNavigationPanel}>
                  <IconEntypo name="login" size={36} color="#FFFFFF" />
                  <Text style={textStyle.TextNavigationPanel}>Log In</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={onClickUser}
                    style={dimensionStyles.LineNavigationPanel}>
                    <Text
                      numberOfLines={2}
                      style={textStyle.TextNavigationPanel}>
                      {`Welcome \n${userToken.user.name}`}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.LogOut}
                    style={dimensionStyles.LineNavigationPanel}>
                    <IconEntypo name="log-out" size={36} color="#FFFFFF" />
                    <Text style={textStyle.TextNavigationPanel}>Log Out</Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
          </Animated.View>
        </Modal>
      </>
    );
  }
}

NavigationPanel.propTypes = {
  categoryData: PropTypes.array,
  modalVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onClickHome: PropTypes.func,
  onClickMenu: PropTypes.func,
  onClickCart: PropTypes.func,
  onClickLogIn: PropTypes.func,
  onClickUser: PropTypes.func,
  RequestClose: PropTypes.func,
};

const mapStateToProps = state => ({
  categoryData: state.categoryData,
  userToken: state.userToken,
});

const mapDispatchToProps = dispatch => ({
  setUserToken: userToken => dispatch(setUserToken(userToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationPanel);
