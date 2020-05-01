import React, { Component } from 'react';
import { Text, View, Image,AsyncStorage } from 'react-native';
import color from '../../resources/colors';
import diemension from '../../resources/dimensions';
import ProductUseCase from '../../usecase/ProductUseCase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Cart/Cart.style';
import string from '../../resources/strings'
import OvalShape from '../../components/OvalShape.component';
import { Button } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import dimension from '../../resources/dimensions';
import CartItem from '../../views/Cart/CartItem.component';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/index';
let productList = [
    {
        id: '1',
        name: 'Pizza Chinese',
        price: 100000,
        quantity: 3,
        size: 'M',
        crust: 'Thin',
        imageURL: 'https://thepizzacompany.vn/345-home_default/bread-pizza.jpg',
    },
    {
        id: '2',
        name: 'Pizza Seafood',
        price: 100000,
        quantity: 1,
        size: 'M',
        crust: 'Think',
        imageURL: 'https://thepizzacompany.vn/345-home_default/bread-pizza.jpg'
    },
    {
        id: '3',
        name: 'Pizza Beef',
        price: 50000,
        quantity: 6,
        size: 'L',
        crust: 'Thin',
        imageURL: 'https://thepizzacompany.vn/114-home_default/pizza-hawaii.jpg'
    },
    {
        id: '4',
        name: 'Pizza Beef',
        price: 12000,
        quantity: 3,
        size: 'L',
        crust: 'Thin',
        imageURL: 'https://thepizzacompany.vn/114-home_default/pizza-hawaii.jpg'
    },
    {
        id: '5',
        name: 'Pizza Beef',
        price: 50000,
        quantity: 6,
        size: 'L',
        crust: 'Thin',
        imageURL: 'https://thepizzacompany.vn/114-home_default/pizza-hawaii.jpg'
    },
    {
        id: '6',
        name: 'Pizza Beef',
        price: 50000,
        quantity: 1,
        size: 'L',
        crust: 'Thin',
        imageURL: 'https://thepizzacompany.vn/114-home_default/pizza-hawaii.jpg'
    },
    {
        id: '7',
        name: 'Pizza Beef',
        price: 50000,
        quantity: 3,
        size: 'L',
        crust: 'Thin',
        imageURL: 'https://thepizzacompany.vn/114-home_default/pizza-hawaii.jpg'
    },

];

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.countMoney(),
            cart: []
        }
    }
    removeItem = (item) => {
        const { removeFromCart } = this.props;
        let orderLine = {};
        orderLine.id = item.id;
        console.log('Clicked ID: ', orderLine.id);
        removeFromCart(orderLine);
        this.setState({ total: this.countMoney() })
    }

    countMoney = () => {
        const { todos } = this.props;
        if (todos.length == 0) {
            return 0;
        }
        let sum = 0;
        todos.forEach(element => {
            sum += element.price * element.quantity;
        });
        return sum;
    }

    renderProductItem = ({ item }) => {
        return (
            <CartItem item={item} deleteItem={() => this.removeItem(item)} />
        )
    
    }


     componentDidMount() {
    //    const {todos} = this.props;
    //     try {
    //         await AsyncStorage.setItem('mycart', JSON.stringify(todos));
    //     } catch (error) {
    //         // Error retrieving data
    //         console.log(error.message);
    //     }
    }

     showUserId() {
        // let userId = '';
        // try {
        //     userId = await AsyncStorage.getItem('mycart') || 'none';
        // } catch (error) {
        //     // Error retrieving data
        //     console.log(error.message);
        // }
        // let mycart = JSON.parse(userId);
        console.log("mycart la: ");
    }

    render() {
        const { todos } = this.props;
        const totalPrice = this.countMoney();
        return (
            <View style={styles.container}>
                <OvalShape />
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerTitle}>{productList.length} {string.promptItemCost} {this.state.total} {string.currency}</Text>
                    </View>
                    {totalPrice ? (<View style={styles.listWraper}>
                        <FlatList data={todos} renderItem={this.renderProductItem}
                            keyExtractor={(productInfo) => productInfo.id} />
                    </View>) :
                        (<View style={styles.emptyCart}>
                            <Text style={styles.emptyPrompt}>{string.propmptEmptyCart}</Text>
                        </View>)
                    }
                    <View style={styles.dottedLine}></View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.promptText}>{string.promptTotal}</Text>
                        <Text style={styles.price}>{totalPrice + ',000'} {string.currency}</Text>
                    </View>
                </View>
                <Button title={string.buttonCheckOut}
                    onPress={this.showUserId}
                    icon={
                        <Icon
                            name="arrow-right"
                            size={dimension.iconSize}
                            color="white"
                            style={{ marginLeft: 120 }}
                        />
                    }
                    titleStyle={{ justifyContent: 'center', fontWeight: 'bold' }}
                    iconRight
                    buttonStyle={styles.buttonCheckOut} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: orderLine => dispatch(removeFromCart(orderLine))

});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)