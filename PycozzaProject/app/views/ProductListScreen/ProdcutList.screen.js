import React, { Component } from 'react'
import { Text, View, FlatList, Image, Dimensions } from 'react-native'
import styles from './ProductList.style';
import ProductUseCase from '../../repositories/ProductRepo/ProductUseCase'
import ProductDAO from '../../repositories/ProductRepo/ProductDAO';
import dimension from '../../resources/dimensions'
import color from '../../resources/colors'
import OvalShape from '../../components/OvalShape.component'
import ListItem from '../../components/ListItem.component'
export default class ProductListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }
    componentDidMount() {
        let products = new ProductUseCase().getListProduct();
        this.setState({ data: products })
    }

    renderProductItem = ({ item }) => {
        return (
           <ListItem item={item}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <OvalShape />
                <FlatList
                    data={this.state.data} renderItem={this.renderProductItem}
                    keyExtractor={(productInfo) => productInfo.id}
                    numColumns={2}
                    style={styles.productList}/>
            </View>
        )
    }
}
