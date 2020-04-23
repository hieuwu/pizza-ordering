import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const dimension = {
    window: {
        width: width,
        height: height
    },
    imageItem: {
        width: 80,
        height: 80,
    },
    itemTitleSize:  18,
    iconSize: 24,
    headerButton: 40,
};
export default dimension;