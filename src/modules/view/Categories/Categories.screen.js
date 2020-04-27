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
    this.setState({data: getData});
  }

  renderCategoryItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        switch (item.title) {
          case 'Pizza':
            this.props.navigation.navigate('pizzaMenu');
            break;

          default:
            break;
        }
      }}>
      <CategoryItem title={item.title} imageSource={item.imageSource} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View styles={CategoriesStyles.container}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderCategoryItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
