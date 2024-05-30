import React from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { colors, fontSizes } from '../config'

interface Props {
    headerStyle?: ViewStyle;
    textStyle?: TextStyle;
    value: string;
}

const Header: React.FC<Props> = ({ headerStyle, textStyle, value }) => {
    return (
        <View style={[styles.headerContainer, headerStyle]}>
            <Text style={[styles.headerTextStyle, textStyle]}>
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'transparent'
    }, headerTextStyle: {
        color: colors.ui.primary,
        fontSize: fontSizes.title,
        fontWeight: 'bold'
    },
})

export default Header;