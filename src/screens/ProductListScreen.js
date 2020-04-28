import React, {Component} from 'react';
import getAPI from '../repository/getAPI.js';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {FavoriteProductCarousel} from '../components/FavoriteProductCarousel.js';
import SplashScreen from '../screens/SplashScreen.js';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {BarsIcon} from '../components/BarsIcon.js';
import {CartIcon} from '../components/CartIcon.js';
import NavigationPanel from '../components/NavigationPanel.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderPanel from '../components/OrderPanel.js';

export default class ProductListScreen extends Component {
  state = {
    isOpenPanel: false,
    data: [],
    isLoading: true,
    isOpenOrderPanel: false,
    productData: {},
  };

  async componentDidMount() {
    const {CategoryId} = this.props.route.params;
    try {
      let response = await getAPI(`/category/${CategoryId}/product`);
      this.setState({data: response.data});
      this.setState({isLoading: false});
    } catch (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
      this.setState({isLoading: false});
    }
  }

  sortByRate(data) {
    data.sort(function(a, b) {
      return b.rate - a.rate;
    });
    return data;
  }

  pickFavoriteProduct(data) {
    const favoriteProduct = data.slice(0, 3);
    return favoriteProduct;
  }

  navigateToProductDetailScreen = item => {
    const {navigation} = this.props;
    navigation.navigate('Product Detail Screen', {item: item});
  };

  showProductList = ({item}) => {
    const {imageUrl, title, description, rate, price} = item;
    return (
      <View style={dimensionStyles.ItemProductListContainer}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => this.navigateToProductDetailScreen(item)}>
          <Image
            style={dimensionStyles.ProductListImg}
            source={{uri: imageUrl}}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={dimensionStyles.ProductListInfo}>
          <Text numberOfLines={1} style={textStyle.ProductListName}>
            {title}
          </Text>
          <Text numberOfLines={2} style={textStyle.ProductListDescription}>
            {description}
          </Text>
          <View style={dimensionStyles.ProductListPrice}>
            <Icon name="star" size={10} color="#ffd93f" />
            <Text style={textStyle.ProductListRate}>Rating: {rate}</Text>
            <Icon name="dollar" size={10} color="#706e7b" />
            <Text style={textStyle.ProductListRate}>Price: {price}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={dimensionStyles.orderNowButtonProductList}
          onPress={() =>
            this.setState({isOpenOrderPanel: true, productData: item})
          }>
          <Text numberOfLines={2} style={textStyle.orderNowButton}>
            ORDER NOW
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {CategoryTitle} = this.props.route.params;
    const {navigation} = this.props;

    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    const sortedData = this.sortByRate(this.state.data);
    const favoriteProduct = this.pickFavoriteProduct(sortedData);

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
        />
        <OrderPanel
          modalVisible={this.state.isOpenOrderPanel}
          onClose={() => this.setState({isOpenOrderPanel: false})}
          RequestClose={() => this.setState({isOpenOrderPanel: false})}
          productData={this.state.productData}
        />
        <FlatList
          numColumns={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={sortedData}
          keyExtractor={item => item._id}
          renderItem={this.showProductList}
          ListHeaderComponent={
            <>
              <View style={dimensionStyles.CarouselBackground} />
              <View style={dimensionStyles.headerCategoryName}>
                <Text style={textStyle.headerCategoryName}>
                  {CategoryTitle}
                </Text>
              </View>

              <View style={dimensionStyles.CarouselContainer}>
                <FavoriteProductCarousel
                  data={favoriteProduct}
                  onClickOrder={item =>
                    this.setState({isOpenOrderPanel: true, productData: item})
                  }
                />
              </View>

              <View style={dimensionStyles.separateLine} />
              <Text style={textStyle.AllProduct}>All Products</Text>
            </>
          }
        />

        <BarsIcon onClick={() => this.setState({isOpenPanel: true})} />
        <CartIcon onClick={() => navigation.navigate('Cart Screen')} />
      </View>
    );
  }
}
