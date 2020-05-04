import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import pizzaMenuStyles from './PizzaMenu.style';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import PizzaListItem from '../../../components/PizzaListItem/PizzaListItem.component';
import PizzaListUseCase from '../../../UseCase/PizzaListUseCase';

export default class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  setHeaderBar() {
    return this.props.navigation.setOptions({
      title: 'Pizza',
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
    let getData = await new PizzaListUseCase().getPizzaList();
    this.setState({data: getData});
  }

  renderPizzaItem = ({item}) => (
    <TouchableOpacity
      style={pizzaMenuStyles.touchContainer}
      onPress={() => {
        this.props.navigation.navigate('pizzaDetail', {data: item});
      }}>
      <PizzaListItem
        imageSource={item.imgUrl}
        pizzaItemTitle={item.name}
        pizzaItemLargePrice={item.price.sizeL}
        pizzaItemMediumPrice={item.price.sizeM}
        pizzaItemSmallPrice={item.price.sizeS}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={pizzaMenuStyles.container}>
        <OvalShape />
        <FlatList
          style={pizzaMenuStyles.flatListContainer}
          data={this.state.data}
          renderItem={this.renderPizzaItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  }
}
