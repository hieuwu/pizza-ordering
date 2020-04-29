import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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
function Item({ title }) {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }

class CartScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: this.props.state,
    //         total: this.countMoney(productList),
    //     }
    // }
    // removeItem = (item) => {
    //     const index = productList.indexOf(item);
    //     if (index > -1) {
    //         productList.splice(index, 1);
    //     }
    //     this.setState({ data: productList });
    //     this.setState({ total: this.countMoney(productList) })
    // }

    // countMoney = (productList) => {
    //     let sum = 0;
    //     productList.forEach(element => {
    //         sum += element.price * element.quantity;
    //     });
    //     return sum;
    // }

    // renderProductItem = ({ item }) => {
    //     return (
    //         <CartItem item={item} deleteItem={() => this.removeItem(item)} />
    //     )
    // }

    render() {
        const {todos} = this.props;
        console.log(todos);
        return (
            <View style={styles.container}>
                <OvalShape />
                {/* <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerTitle}>{productList.length} {string.promptItemCost} {this.state.total} {string.currency}</Text>
                    </View>
                    {this.state.total ? (<View style={styles.listWraper}>
                        <FlatList data={this.state.data} renderItem={this.renderProductItem}
                            keyExtractor={(productInfo) => productInfo.id} />
                    </View>) :
                        (<View style={styles.emptyCart}>
                            <Text style={styles.emptyPrompt}>{string.propmptEmptyCart}</Text>
                        </View>)
                    }
                    <View style={styles.dottedLine}></View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.promptText}>{string.promptTotal}</Text>
                        <Text style={styles.price}>{this.state.total} {string.currency}</Text>
                    </View>
                </View>
                <Button title={string.buttonCheckOut}
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
                    buttonStyle={styles.buttonCheckOut} /> */}
                <FlatList
                    data={todos}
                    renderItem={({ item }) => <Item title={item.text} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({ 
     todos: state.todos});

const mapDispatchToProps = dispatch => ({
  
});
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)