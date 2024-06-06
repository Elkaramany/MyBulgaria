import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { MainStackNavigationProp, MainStackRouteProp } from 'navigation/types'
import { Container, Text } from '@components'
import { colors, globalStyles } from '@config'
import { StarIcon } from '@assets'
import Thumbnail from './thumbnail'
import Overview from './overview'
import Todo from './todo'
import Reviews from './reviews'
import { calculateAverageScore } from './utils'

interface Props {
    navigation: MainStackNavigationProp<'PropertyDetails'>
    route: MainStackRouteProp<'PropertyDetails'>
}

const PropertyDetails: React.FC<Props> = ({ navigation, route }) => {
    const { property } = route.params

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Thumbnail property={property} navigation={navigation} />
            <Container parentContainerStyle={{ paddingTop: 25 }}>
                <Overview property={property} />
                <Todo property={property} />
                <Reviews reviews={property.reviews} />
            </Container>
        </ScrollView>

    )
}

export default PropertyDetails

const styles = StyleSheet.create({

})