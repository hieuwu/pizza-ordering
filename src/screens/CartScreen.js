import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class CartScreen extends Component {
  render() {
  	const {orderLineArray}=this.props;
  	console.log(orderLineArray);

    return (
      <View style={{flex: 1}}>
        <Text>Cart screen</Text>
      </View>
    );
  }
}

CartScreen.propTypes = {
  orderLineArray: PropTypes.array,
};

const mapStateToProps = state => ({
  orderLineArray: state.orderLineArray,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartScreen);