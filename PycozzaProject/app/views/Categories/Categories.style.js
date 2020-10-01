import { StyleSheet } from 'react-native'
import dimension from '../../resources/dimensions';
import color  from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageStyle: {
        width: dimension.window.width,
        height: 246,
       
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: color.white,
        textAlign: 'right',
        alignContent: 'flex-end',
        marginTop: 'auto',
        marginRight: 15,
    }
})

export default styles;