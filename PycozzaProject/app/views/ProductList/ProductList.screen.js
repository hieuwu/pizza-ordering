import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native'
import styles from './ProductList.style';
import ProductUseCase from '../../usecase/ProductUseCase'
import OvalShape from '../../components/OvalShape.component'
import ListItem from './ListItem.component';
import { RecyclerListView, DataProvider, LayoutProvider, } from "recyclerlistview";
import dimension from '../../resources/dimensions';
import itemStyles from './ListItem.component'
import color from '../../resources/colors';



export default class ProductListScreen extends Component {
    constructor(props) {
        super(props);
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        }, (index) => this.state.items[index].id);

        this._layoutProvider = new LayoutProvider(
            index => 0,
            (type, dim) => {
                switch (type) {
                    case 0:
                        dim.width = dimension.window.width;
                        dim.height = 140;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        this.state = {
            dataProvider: dataProvider.cloneWithRows([]),
            items: []
        };
    }

    setHeaderTitle() {
        const { title } = this.props.route.params;

        return this.props.navigation.setOptions({
            title: title,
        })
    }


    _rowRenderer(type, item) {
        switch (type) {
            case 0:
                return (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail', { item })} style={itemStyles.itemWrapper}>

                        <Image style={itemStyles.itemImage} source={{ uri: item.imgLink }} />
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={itemStyles.itemTitle}>{item.name}</Text>

                            <Text>{item.price + ',000'} - {item.maxPrice + ',000'} VNĐ</Text>
                        </View>
                    </TouchableOpacity>
                );
            default:
                return null;
        }
    }

    async componentDidMount() {
        try {
            
        let products = await new ProductUseCase().getListProduct();
        console.log(products);

        }
        catch(error)
        {
            console.log('Loi la: ',error)
        }
        //   this.setState(state => {
        //           const items = [
        //             ...products, 
        //           ];
        //           return {
        //             dataProvider: state.dataProvider.cloneWithRows(items),
        //             items
        //           }
        //         })
        this.setHeaderTitle()
    }

    render() {
        return (
            <View style={styles.container}>
                <OvalShape />
                {/* <View style={{flex: 1}}> 
                <RecyclerListView
                        layoutProvider={this._layoutProvider}
                        dataProvider={this.state.dataProvider}
                        rowRenderer={this._rowRenderer}
                        scrollViewProps= {{horizontal: true}}
                    />
                </View> */}
                {/* <FlatList
                    data={this.state.items} renderItem={this.renderProductItem}
                    keyExtractor={(productInfo) => productInfo.id}
                    numColumns={2}
                    style={styles.productList}/> */}
            </View>
        )
    }
}
