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
    largeImage: {
        width: 200,
        height: 200,
    },
    itemTitleSize:  18,
    iconSize: 24,
    headerButton: 40,
    topMargin: 24,
};
export default dimension;