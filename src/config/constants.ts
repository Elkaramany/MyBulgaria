import { scale, verticalScale } from 'react-native-size-matters';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { colors } from './colors'
import { fonts, fontSizes, fontWeights } from './fonts';
import { sizes } from './sizes';
import { space, lineHeights } from './spacing';

const IOS: boolean = Platform.OS === 'ios';
const ANDROID: boolean = Platform.OS === 'android';
const WIDTH: number = Dimensions.get('window').width
const HEIGHT: number = Dimensions.get('window').height

const globalStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        marginBottom: verticalScale(30),
        width: scale(90),
        borderRadius: scale(50),
    }, bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: verticalScale(15),
    }, bottomAbsoluted: {
        position: 'absolute',
        bottom: 0,
        marginBottom: verticalScale(15),
    },
})


export {
    globalStyles, IOS, ANDROID,
    WIDTH, HEIGHT,
    colors,
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    sizes
};