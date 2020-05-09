import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import ProductMenuStyles from './ProductMenu.style';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import ProductUseCase from '../../../UseCase/ProductUseCase';
import ProductItem from '../../../components/ProductItem/ProductItem.component';

import Splash from '../Splash.screen';

export default class ProductMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      isLoading: true,
      catId: this.props.route.params.catId,
      menuTitle: this.props.route.params.categoryName,
    };
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: this.state.menuTitle,
      headerTransparent: true,
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
      },
      headerLeft: navigation => (
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <HeaderIcon iconName="bars" />
        </TouchableOpacity>
      ),
      headerRight: navigation => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('cart')}>
          <HeaderIcon iconName="shopping-cart" />
        </TouchableOpacity>
      ),
    });
  }

  async componentDidMount() {
    this.setHeaderBar();
    let getData = await new ProductUseCase().getProductWithId(this.state.catId);
    if (getData.length > 0) {
      this.setState({isLoading: false});
    }
    this.setState({data: getData});
  }

  renderProductItem = ({item}) => (
    <TouchableOpacity
      style={ProductMenuStyles.touchContainer}
      onPress={() => {
        this.props.navigation.navigate('productDetail', {
          data: item,
          catId: this.state.catId,
        });
      }}>
      <ProductItem
        imgUrl={item.imgUrl}
        name={item.name}
        sizeL={item.price.sizeL}
        sizeM={item.price.sizeM}
        sizeS={item.price.sizeS}
      />
    </TouchableOpacity>
  );

  renderLoadingScreen = () => {
    if (this.state.isLoading === true) {
      return (
        <View style={ProductMenuStyles.container}>
          <OvalShape />
          <Splash />
        </View>
      );
    } else {
      return (
        <View style={ProductMenuStyles.container}>
          <OvalShape />
          <FlatList
            style={ProductMenuStyles.flatListContainer}
            data={this.state.data}
            renderItem={this.renderProductItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      );
    }
  };

  render() {
    const mainView = this.renderLoadingScreen();
    return <View style={ProductMenuStyles.container}>{mainView}</View>;
  }
}
