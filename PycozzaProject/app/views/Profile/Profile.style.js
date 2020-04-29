import { StyleSheet } from 'react-native'
import dimension from '../../resources/dimensions';
import color from '../../resources/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    contentStyle: {
        fontSize: 18,
        paddingHorizontal: 7,
        paddingVertical: 7,
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
        backgroundColor: color.textColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 7,
        borderRadius: 15,

    },
    infoWrapper: {
        alignItems: 'flex-start',
        flex: 5,
        alignSelf: 'center',
    },
    imageWrapper: {
        flex: 5,
        alignItems: 'center',
    },
    imageStyle: {
        width: dimension.largeImage.width,
        height: dimension.largeImage.height,
        resizeMode: 'center',
        borderRadius: 200,
    },
});

export default styles;