import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dimensionStyles} from '../resources/dimension.js';
import {textStyle} from '../resources/textStyle.js';
import {connect} from 'react-redux';

class CartIcon extends Component {
  render() {
    const {onClick, orderLineArray} = this.props;
    let numberOfOrderLines = orderLineArray.length;
    return (
      <TouchableOpacity onPress={onClick} style={dimensionStyles.CartIcon}>
        <Icon name="shopping-bag" size={20} color="#FFFFFF" />
        {numberOfOrderLines !== 0 ? (
          <View style={dimensionStyles.CartIconNumber}>
            <Text numberOfLines={1} style={textStyle.CartIconNumber}>
              {numberOfOrderLines}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

CartIcon.propTypes = {
  orderLineArray: PropTypes.array,
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({
  orderLineArray: state.orderLineArray,
});

export default connect(
  mapStateToProps,
  null,
)(CartIcon);
