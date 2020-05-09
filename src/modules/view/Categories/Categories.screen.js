import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import CategoryItem from '../../../components/CategoryItem/CategoryItem.component';
import CategoriesStyles from './Categories.style';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import CategoriesUseCase from '../../../UseCase/CategoriesUseCase';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: null,
      headerTransparent: true,
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
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
    let getData = await new CategoriesUseCase().getCategoriesList();
    this.setState({data: getData.data.categories});
  }

  renderCategoryItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('productMenu', {
          catId: item.catId,
          categoryName: item.categoryName,
        });
      }}>
      <CategoryItem title={item.categoryName} imageSource={item.imgUrl} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={CategoriesStyles.container}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderCategoryItem}
            keyExtractor={item => item.catId}
          />
        </View>
      </View>
    );
  }
}
