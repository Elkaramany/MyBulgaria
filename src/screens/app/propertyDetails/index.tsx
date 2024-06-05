import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MainStackNavigationProp, MainStackRouteProp } from 'navigation/types'
import { Container, Text } from '@components'
import { colors, globalStyles } from '@config'
import { StarIcon } from '@assets'
import Thumbnail from './thumbnail'
import { calculateAverageScore } from './utils'

interface Props {
    navigation: MainStackNavigationProp<'PropertyDetails'>
    route: MainStackRouteProp<'PropertyDetails'>
}

const PropertyDetails: React.FC<Props> = ({ navigation, route }) => {
    const { property } = route.params

    return (
        <View style={{ flex: 1 }}>
            <Thumbnail property={property} navigation={navigation} />
            <Container parentContainerStyle={{ paddingTop: 31 }}>
                <View style={globalStyles.rowBetween}>
                    <Text value={property.name} color={'#1E1E1E'} h3 lightBold />
                    <View style={{ flexDirection: 'row' }}>
                        <StarIcon fill={'#ECB526'} style={{ right: 8 }} />
                        <Text value={calculateAverageScore(property.reviews).toString()} regular title color={colors.text.quaternary} />
                    </View>
                </View>
            </Container>
        </View>

    )
}

export default PropertyDetails

const styles = StyleSheet.create({
    topIcon: {
        backgroundColor: colors.bg.primary,
        height: 38,
        width: 38,
        borderRadius: 38,
        ...globalStyles.centeredContainer
    }
})