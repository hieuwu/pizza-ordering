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
import {ShowCategory} from '../components/ShowCategory.js';
import {BarsIcon} from '../components/BarsIcon.js';
import {CartIcon} from '../components/CartIcon.js';
import {NavigationPanel} from '../components/NavigationPanel.js';

class CategoryScreen extends Component {
  state = {
    isOpenPanel: false,
  };

  navigateToProductListScreen = title => {
    const {navigation} = this.props;
    switch (title) {
      case 'Pizza': {
        return navigation.navigate('Pizza Product List Screen');
      }
      case 'Pasta': {
        return navigation.navigate('Pasta Product List Screen');
      }
      case 'Salad': {
        return navigation.navigate('Salad Product List Screen');
      }
      case 'Dessert': {
        return navigation.navigate('Dessert Product List Screen');
      }
      case 'Beverage': {
        return navigation.navigate('Beverage Product List Screen');
      }
      default:
        return null;
    }
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
          onClickPizza={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Pizza Product List Screen');
          }}
          onClickPasta={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Pasta Product List Screen');
          }}
          onClickSalad={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Salad Product List Screen');
          }}
          onClickDessert={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Dessert Product List Screen');
          }}
          onClickBeverage={() => {
            this.setState({isOpenPanel: false});
            navigation.navigate('Beverage Product List Screen');
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
              onClick={() => this.navigateToProductListScreen(item.title)}
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
