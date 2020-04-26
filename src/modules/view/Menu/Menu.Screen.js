import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Products from '../../../components/Menu/Products.component';
import MenuUseCase from '../../../UseCase/MenuUseCase';
import menuStyles from './Menu.style';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  async componentDidMount() {
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
