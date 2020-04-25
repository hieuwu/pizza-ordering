import React, {Component} from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';
import Carousel from 'react-native-anchor-carousel';
import {Dimensions} from 'react-native';

export class FavoriteProductCarousel extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  renderItem = ({ item, index }) => {
    const { imageUrl } = item;
    return (
      <TouchableOpacity
        style={dimensionStyles.itemCarouselContainer}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: imageUrl }}
          style={dimensionStyles.imageBackgroundCarousel}
          resizeMode="cover"
        >

        </ImageBackground>    
        <View style={dimensionStyles.FavoriteProductInfo}>
            
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
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}