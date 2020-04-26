import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Products from '../../../components/Menu/Products.component';
import MenuUseCase from '../../../UseCase/MenuUseCase';
import menuStyles from './Categories.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../resources/colors/Colors';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  async componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Categories',
      headerStyle: {
        backgroundColor: colors.startOrder,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      headerLeft: navigation => (
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Icon name="bars" size={30} color="white" style={{margin: 10}} />
        </TouchableOpacity>
      ),
      headerRight: navigation => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('cart')}>
          <Icon
            name="shopping-cart"
            size={30}
            color="white"
            style={{margin: 10}}
          />
        </TouchableOpacity>
      ),
    });
    let getData = await new MenuUseCase().getMenuList();
    this.setState({data: getData});
  }

  render() {
    return (
      <View styles={menuStyles.container}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <Products title={item.title} imageSource={item.imageSource} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
