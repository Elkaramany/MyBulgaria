import React from 'react'
import { View, ViewStyle } from 'react-native'
import { colors } from '../config'

interface Props {
    parentContainerStyle?: ViewStyle
    childContainerStyle?: ViewStyle
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ parentContainerStyle, childContainerStyle, children }) => {

    return (
        <View style={[{ flex: 1, backgroundColor: colors.bg.primary }, parentContainerStyle]}>
            <View style={[{ flex: 1, marginHorizontal: '3.5%' }, childContainerStyle,]}>
                {children}
            </View>
        </View>
    )
}

export default Container