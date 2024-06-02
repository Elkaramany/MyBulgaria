import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native'
import Text from './text'
import { IOS, WIDTH, colors, globalStyles } from '@config'
import { moderateScale, scale } from 'react-native-size-matters'

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
            <View style={{ left: 15, position: 'absolute' }}>{icon}</View>
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
        marginVertical: IOS ? scale(7) : scale(5),
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