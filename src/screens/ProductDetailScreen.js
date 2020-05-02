import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {BarsIcon} from '../components/BarsIcon.js';
import {CartIcon} from '../components/CartIcon.js';
import NavigationPanel from '../components/NavigationPanel.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderPanel from '../components/OrderPanel.js';

export default class ProductDetailScreen extends Component {
  state = {
    isOpenPanel: false,
    isOpenOrderPanel: false,
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    const {navigation} = this.props;
    const {item} = this.props.route.params;
    const {imageUrl, title, rate, description, price} = item;
    return (
      <View style={dimensionStyles.container}>
        <NavigationPanel
          modalVisible={this.state.isOpenPanel}
          onClose={() => this.setState({isOpenPanel: false})}
          RequestClose={() => this.setState({isOpenPanel: false})}
          onClickHome={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Home Screen');
          }}
          onClickMenu={(_id, title) => {
            this.setState({isOpenPanel: false});
            navigation.push('Product List Screen', {
              CategoryId: _id,
              CategoryTitle: title,
            });
          }}
          onClickCart={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Cart Screen');
          }}
          onClickLogIn={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Log In Screen');
          }}
          onClickUser={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('User Profile Screen');
          }}
        />
        <OrderPanel
          modalVisible={this.state.isOpenOrderPanel}
          onClose={() => this.setState({isOpenOrderPanel: false})}
          RequestClose={() => this.setState({isOpenOrderPanel: false})}
          productData={item}
        />
        <ScrollView>
          <Image
            style={dimensionStyles.ImageProductDetail}
            source={{uri: imageUrl}}
            resizeMode="cover"
          />
          <Text numberOfLines={2} style={textStyle.ProductDetailName}>
            {title}
          </Text>
          <View style={dimensionStyles.ProductDetailRate}>
            <Icon name="star" size={20} color="#ffd93f" />
            <Text style={textStyle.ProductDetailRate}>{rate}</Text>
          </View>
          <Text style={textStyle.DescriptionHeader}>Description</Text>
          <Text style={textStyle.DecriptionInfo}>{description}</Text>
          <View style={dimensionStyles.ProductDetailPrice}>
            <Icon name="dollar" size={15} color="#0b2031" />
            <Text style={textStyle.ProductDetailPrice}>Price: {price}</Text>
          </View>
          <TouchableOpacity
            style={dimensionStyles.checkOutButton}
            onPress={() => this.setState({isOpenOrderPanel: true})}>
            <Text style={textStyle.orderNowButton}>ORDER NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={dimensionStyles.goBackIconDetailScreen}
            onPress={this.navigateBack}>
            <Icon name="angle-left" size={30} color="#0a1e2f" />
          </TouchableOpacity>
        </ScrollView>
        <BarsIcon onClick={() => this.setState({isOpenPanel: true})} />
        <CartIcon onClick={() => navigation.navigate('Cart Screen')} />
      </View>
    );
  }
}
