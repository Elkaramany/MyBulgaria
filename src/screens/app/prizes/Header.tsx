import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainStackNavigationProp } from '@navigationTypes'
import { Text } from '@components'
import { colors, globalStyles } from 'config'
import { PlusIcon } from '@assets'

interface Props {
    navigation: MainStackNavigationProp<'Tabs'>
}

const Header: React.FC<Props> = ({ navigation }) => {

    return (
        <>
            <View style={globalStyles.rowBetween}>
                <Text
                    value={`Score & Points of ${'\n'} Insteres`} lightBold h3 color={colors.text.secondary}
                />
                <TouchableOpacity style={globalStyles.iconContainer} onPress={() => { }}>
                    <PlusIcon fill={colors.brand.primary} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Header