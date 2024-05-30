import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native'
import Text from './text'
import { WIDTH, colors, fontWeights, globalStyles } from '@config'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

interface Props {
    onPress: () => void
    value: string
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
    icon?: React.ReactNode
}

const Button: React.FC<Props> = ({ onPress, value, buttonStyle, textStyle, icon }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainer, buttonStyle]}>
            <Text
                value={value}
                bold
                title
                style={[styles.buttonTextPadding, textStyle]}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.brand.primary,
        marginTop: scale(15),
        ...globalStyles.centeredContainer,
        borderRadius: moderateScale(15),
        width: WIDTH * 0.8,
    },
    buttonTextPadding: {
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(23)
    }
})

export default Button;