import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, RefreshControl, Image, Text, ActivityIndicator } from 'react-native'
import styles from './ProductList.style';
import ProductUseCase from '../../usecase/ProductUseCase'
import OvalShape from '../../components/OvalShape.component'
import ListItem from './ListItem.component';
import { RecyclerListView, DataProvider, LayoutProvider, } from "recyclerlistview";
import dimension from '../../resources/dimensions';
import itemStyles from './ListItem.component'
import color from '../../resources/colors';
import AppConfig from '../../config/AppConfig'
import { ScrollView } from 'react-native-gesture-handler';
import ProductAPI from '../../repositories/ProductRepository/ProductAPI';



export default class ProductListScreen extends Component {
    constructor(props) {
        console.disableYellowBox = true;
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
            items: [],
            isRefreshing: false,
            isPizza: false,
            isLoading: true,
        };
    }

    setHeaderTitle() {
        const { title } = this.props.route.params;
        return this.props.navigation.setOptions({
            title: title,
        })
    }

    _rowRenderer(type, item) {
        const { title } = this.props.route.params;
        switch (type) {
            case 0:
                return (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail', { item: item, title: title })} style={itemStyles.itemWrapper}>
                        <Image style={itemStyles.itemImage} source={{ uri: AppConfig.IMAGE.baseURL + item.imgLink }} />
                        <View style={{
                            alignItems: 'center',
                            marginRight: 25,
                        }}>
                            <Text style={itemStyles.itemTitle}>{item.name}</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={itemStyles.price}>{item.price + ',000'} </Text>
                                {
                                    this.state.isPizza ? (<View style={{ flexDirection: 'row' }} >
                                        <Text style={itemStyles.price}>- {item.maxPrice + ',000'} </Text>
                                        <Text style={itemStyles.price}>VNĐ</Text>
                                    </View>) : (<View></View>)
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            default:
                return null;
        }
    }

    async componentDidMount() {
        const { type } = this.props.route.params;
        if (type == '1') {
            this.setState({ isPizza: true })
        }
        try {
            let products = await new ProductUseCase().getListProduct(type);
            await new ProductUseCase().saveListProduct(type, products);
            this.setState({isLoading: false});
            this.setState(state => {
                const items = [
                    ...products,
                ];
                return {
                    dataProvider: state.dataProvider.cloneWithRows(items),
                    items
                }
            });
        }
        catch (error) {
            console.log('Loi la: ', error)
        }
        this.setHeaderTitle()
    }
    onRefresh = async () => {
        this.setState({ isRefreshing: true });
        const { type } = this.props.route.params;
        try {
            let products = await new ProductAPI().getListProduct(type);
            await new ProductUseCase().saveListProduct(type, products);
            this.setState(state => {
                const items = [
                    ...products,
                ];
                return {
                    dataProvider: state.dataProvider.cloneWithRows(items),
                    items
                }
            })
            this.setState({ isRefreshing: false });
        }
        catch (error) {
            this.setState({ isRefreshing: false });
            console.log('Loi la: ', error)
        }
        this.setState({ isRefreshing: false });
    }
    render() {
        return (
            <View style={styles.container}>
                <OvalShape />
                {
                    this.state.isLoading ? <ActivityIndicator /> : (
                        <View style={{flex:1}}>
                            <View style={{ height: 0, backgroundColor: 'transparent' }}>
                                <ScrollView
                                    refreshControl={
                                        <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh} />}
                                >
                                </ScrollView>
                            </View>
                            <View style={{ flex: 1 }}>
                                <RecyclerListView
                                    layoutProvider={this._layoutProvider}
                                    dataProvider={this.state.dataProvider}
                                    rowRenderer={this._rowRenderer}
                                    scrollViewProps={{ horizontal: true }}
                                />
                            </View>
                        </View>)
                }
            </View>
        )
    }
}
