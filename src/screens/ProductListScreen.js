import React, {Component} from 'react';
import getAPI from '../repository/getAPI.js';
import {View, Text} from 'react-native';
import {FavoriteProductCarousel} from '../components/FavoriteProductCarousel.js';
import SplashScreen from '../screens/SplashScreen.js';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {BarsIcon} from '../components/BarsIcon.js';
import {CartIcon} from '../components/CartIcon.js';

export default class ProductListScreen extends Component {
	state = {
		isOpenPanel: false,
	    data: [],
	    isLoading: true
	  };

	async componentDidMount() {
		const {CategoryId}=this.props.route.params;
		try {
	      let response = await getAPI(`/category/${CategoryId}/product`);
	      this.setState({data:response.data})
	      this.setState({isLoading:false})
	    } catch (error) {
	      console.log(error);
	      this.setState({isLoading:false})
	    }
	}

	sortByRate(data) {
		data.sort(function(a, b){return b.rate - a.rate})
		return data
	}

	pickFavoriteProduct(data) {
		const favoriteProduct=data.slice(0,3)
		return favoriteProduct
	}

  render() {
  	const {CategoryTitle}=this.props.route.params;

  	if (this.state.isLoading) {
      return <SplashScreen />;
    }

  	const sortedData=this.sortByRate(this.state.data)
  	const favoriteProduct=this.pickFavoriteProduct(sortedData)

    return (
      <View style={dimensionStyles.container}>
        <View style={dimensionStyles.CarouselBackground} />
        <View style={dimensionStyles.headerCategoryName}>
          <Text style={textStyle.headerCategoryName}>{CategoryTitle}</Text>
        </View>

        <View style={dimensionStyles.CarouselContainer}>
          <FavoriteProductCarousel data={favoriteProduct} />
        </View>
        <BarsIcon onClick={() => this.setState({isOpenPanel: true})} />
        <CartIcon onClick={() => navigation.navigate('Cart Screen')} />
      </View>
    );
  }
}
