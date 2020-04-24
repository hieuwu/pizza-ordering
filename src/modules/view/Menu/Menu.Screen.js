import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Products from '../../../components/Menu/Products.component';

const DATA = [
  {
    id: 1,
    title: 'Pizza',
    imageSource: require('../../resources/images/menuPizza.jpg'),
  },
  {
    id: 2,
    title: 'Pasta',
    imageSource: require('../../resources/images/menuPasta.jpg'),
  },
  {
    id: 3,
    title: 'Salad',
    imageSource: require('../../resources/images/menuSalad.jpg'),
  },
  {
    id: 4,
    title: 'Dessert',
    imageSource: require('../../resources/images/menuDessert.jpg'),
  },
  {
    id: 5,
    title: 'Beverage',
    imageSource: require('../../resources/images/menuBeverage.jpg'),
  },
];

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList
          data={DATA}
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
