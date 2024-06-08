import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Text } from '@components'
import { LeftArrowIcon, BellIcon } from '@assets'
import { colors, globalStyles } from '@config'
import { MainStackNavigationProp } from '@navigationTypes'

interface Props {
    navigation: MainStackNavigationProp<'Leaderboard'>
}

const Leaderboard: React.FC<Props> = ({ navigation }) => {
    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftArrowIcon
                    fill={colors.brand.primary}
                />
            </TouchableOpacity>

            <View style={[globalStyles.rowBetween, { marginTop: 25}]}>
                <Text
                    value='Leaderboard' lightBold h3 color={colors.text.secondary}
                />

                <TouchableOpacity style={styles.bellContainer}>
                    <BellIcon fill={colors.brand.primary} />
                </TouchableOpacity>
            </View>

        </Container>
    )
}

export default Leaderboard

const styles = StyleSheet.create({
    bellContainer: {
        borderWidth: 2,
        borderColor: colors.brand.primary,
        borderRadius: 12,
        padding: 8
    },
})