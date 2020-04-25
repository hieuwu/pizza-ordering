import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {BarsIcon} from '../components/BarsIcon.js';
import {CartIcon} from '../components/CartIcon.js';
import NavigationPanel from '../components/NavigationPanel.js';

class ShowCategory extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  render() {
    const {img, title, onClick} = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={dimensionStyles.CategoryContainer}>
          <ImageBackground
            style={dimensionStyles.CategoryImg}
            source={{uri: img}}
            resizeMode="cover"
          />
          <Text style={textStyle.CategoryText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class CategoryScreen extends Component {
  state = {
    isOpenPanel: false,
  };

  navigateToProductListScreen = (id,title) => {
    const {navigation} = this.props;
    navigation.navigate('Product List Screen', {CategoryId: id, CategoryTitle: title});
  };

  render() {
    const {categoryData, navigation} = this.props;

    return (
      <View style={dimensionStyles.container}>
        <NavigationPanel
          modalVisible={this.state.isOpenPanel}
          onClose={() => this.setState({isOpenPanel: false})}
          onClickHome={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Home Screen');
          }}
          onClickMenu={(_id, title) => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Product List Screen', {CategoryId: _id, CategoryTitle: title});
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
        <FlatList
          numColumns={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={categoryData}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <ShowCategory
              img={item.imageUrl}
              title={item.title}
              onClick={() => this.navigateToProductListScreen(item._id,item.title)}
            />
          )}
        />
        <BarsIcon onClick={() => this.setState({isOpenPanel: true})} />
        <CartIcon onClick={() => navigation.navigate('Cart Screen')} />
      </View>
    );
  }
}

CategoryScreen.propTypes = {
  categoryData: PropTypes.array,
};

const mapStateToProps = state => ({
  categoryData: state.categoryData,
});

export default connect(
  mapStateToProps,
  null,
)(CategoryScreen);
