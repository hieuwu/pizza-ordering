import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Slider} from 'react-native';
import pizzaMenuStyles from './PizzaMenu.style';
import HeaderIcon from '../../../components/HeaderIcon/HeaderIcon.component';
import OvalShape from '../../../components/OvalShape/OvalShape.component';
import PizzaListItem from '../../../components/PizzaListItem/PizzaListItem.component';
import PizzaListUseCase from '../../../UseCase/PizzaListUseCase';
import Splash from '../Splash.screen';

export default class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: '', isLoading: true};
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
    if (getData.length > 0) {
      this.setState({isLoading: false});
    }
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

  renderLoadingScreen = () => {
    if (this.state.isLoading === true) {
      return (
        <View style={pizzaMenuStyles.container}>
          <OvalShape />
          <Splash />
        </View>
      );
    } else {
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
  };

  render() {
    const mainView = this.renderLoadingScreen();
    return <View style={pizzaMenuStyles.container}>{mainView}</View>;
  }
}
