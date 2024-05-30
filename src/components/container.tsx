import React from 'react'
import { View, ViewStyle } from 'react-native'
import { colors } from '../config'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { moderateScale, scale } from 'react-native-size-matters'

interface Props {
    parentContainerStyle?: ViewStyle
    childContainerStyle?: ViewStyle
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ parentContainerStyle, childContainerStyle, children }) => {

    return (
        <View style={[{ flex: 1, backgroundColor: colors.bg.primary, paddingTop: getStatusBarHeight() }, parentContainerStyle]}>
            <View style={[{ flex: 1, marginHorizontal: scale(36) }, childContainerStyle,]}>
                {children}
            </View>
        </View>
    )
}

export default Container