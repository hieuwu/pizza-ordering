import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './TitleLine.style';

export default class TitleLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.titleLineContainer}>
        <View style={styles.circleView}>
          <Text style={styles.numberTxt}> {this.props.number} </Text>
        </View>
        <Text style={styles.titleTxt}> {this.props.title}</Text>
      </View>
    );
  }
}
