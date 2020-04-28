import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';
import Carousel from 'react-native-anchor-carousel';
import {Dimensions} from 'react-native';
import {textStyle} from '../resources/textStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class FavoriteProductCarousel extends Component {
  static propTypes = {
    data: PropTypes.array,
    onClickOrder: PropTypes.func,
  };

  renderItem = ({item, index}) => {
    const {imageUrl, title, rate, price} = item;
    const {onClickOrder} = this.props;
    return (
      <TouchableOpacity
        style={dimensionStyles.itemCarouselContainer}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}>
        <Image
          source={{uri: imageUrl}}
          style={dimensionStyles.imageCarousel}
          resizeMode="cover"
        />
        <View style={dimensionStyles.favoriteProductInfoContainer}>
          <TouchableOpacity
            style={dimensionStyles.orderNowButtonCarousel}
            onPress={() => onClickOrder(item)}>
            <Text numberOfLines={2} style={textStyle.orderNowButton}>
              ORDER NOW
            </Text>
          </TouchableOpacity>
          <Text numberOfLines={2} style={textStyle.favoriteProductName}>
            {title}
          </Text>
          <View style={dimensionStyles.favoriteProductInfo}>
            <Icon name="star" size={13} color="#ffd93f" />
            <Text style={textStyle.favoriteProductInfo}>Rating: {rate}</Text>
          </View>
          <View style={dimensionStyles.favoriteProductInfo}>
            <Icon name="dollar" size={13} color="#FFFFFF" />
            <Text style={textStyle.favoriteProductInfo}>Price: {price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {data} = this.props;
    return (
      <Carousel
        data={data}
        renderItem={this.renderItem}
        itemWidth={0.8 * Dimensions.get('window').width}
        inActiveOpacity={0.3}
        ref={c => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}

export {FavoriteProductCarousel};
