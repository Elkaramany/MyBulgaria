import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { MainStackNavigationProp, MainStackRouteProp } from 'navigation/types'
import { Container } from '@components'
import Thumbnail from './thumbnail'
import Overview from './overview'
import Todo from './todo'
import Reviews from './reviews'

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