import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native'
import Text from './text'
import { colors, fontWeights, globalStyles } from '@config'
import { scale, verticalScale } from 'react-native-size-matters'

interface Props {
    onPress: () => void
    value: string
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
    icon?: React.ReactNode
}

const Button: React.FC<Props> = ({ onPress, value, buttonStyle, textStyle, icon }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.container, buttonStyle]}>
            {icon && <View style={{ paddingRight: scale(5) }}>{icon}</View>}
            <Text value={value} style={[styles.buttonText, textStyle]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.rowCenter,
        backgroundColor: colors.brand.primary,
        padding: scale(12),
        borderRadius: scale(5),
        margin: verticalScale(5)
    }, buttonText: {
        color: colors.text.inverse,
        fontWeight: fontWeights.regular
    }
})

export default Button;