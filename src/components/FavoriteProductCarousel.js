import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {textStyle} from '../resources/textStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class FavoriteProductCarousel extends Component {
  static propTypes = {
    data: PropTypes.array,
    onClickOrder: PropTypes.func,
    onClickImage: PropTypes.func,
  };

  renderItem = ({item, index}) => {
    const {imageUrl, title, rate, price} = item;
    const {onClickOrder, onClickImage} = this.props;
    return (
      <TouchableOpacity
        style={dimensionStyles.itemCarouselContainer}
        onPress={() => onClickImage(item)}>
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
        sliderWidth={Dimensions.get('window').width}
        ref={c => {
          this._carousel = c;
        }}
      />
    );
  }
}

export {FavoriteProductCarousel};
