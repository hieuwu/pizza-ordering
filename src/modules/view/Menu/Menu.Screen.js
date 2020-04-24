import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Products from '../../../components/Menu/Products.component';
import MenuUseCase from '../../../UseCase/MenuUseCase';

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
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <Products title={item.title} imageSource={item.imageSource} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
