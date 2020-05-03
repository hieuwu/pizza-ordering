import {Dimensions} from 'react-native';

const dimensionHeight = Dimensions.get('window').height;
const dimensionWidth = Dimensions.get('window').width;

export default {
  startOrderBtn: {
    height: 50,
    lineHeight: 50,
  },
  screenSize: {
    height: dimensionHeight,
    width: dimensionWidth,
  },
  login: {
    containerHeight: 700,
    subViewHeight: '90%',
    txtInputWidth: 270,
    txtInputHeight: 40,
    btnHeight: 50,
    btnWidth: '90%',
  },
};
