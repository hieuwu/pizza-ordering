import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const dimension = {
    window: {
        width: width,
        height: height
    }
};
export default dimension;