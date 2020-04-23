import React, { Component } from 'react'
import { View, FlatList} from 'react-native'
import styles from './ProductList.style';
import ProductUseCase from '../../usecase/ProductUseCase'
import OvalShape from '../../components/OvalShape.component'
import ListItem from './ListItem.component'
export default class ProductListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }
    async componentDidMount() {
        let products = await new ProductUseCase().getListProduct();
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
