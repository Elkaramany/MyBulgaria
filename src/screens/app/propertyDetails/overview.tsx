import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { WIDTH, colors, globalStyles } from '@config'
import { StarIcon } from '@assets'
import { calculateAverageScore } from './utils'
import { PropertyType } from '@redux'

interface Props {
    property: PropertyType
}

const Overview: React.FC<Props> = ({ property }) => {

    // Default values in case property object is missing or invalid
    const defaultProperty: Partial<PropertyType> = {
        name: 'Name unavailable',
        reviews: [],
        categories: [],
        description: 'Description unavailable'
        // Add more default properties here as needed
    }

    // Destructure property or use default values
    const {
        name = 'Name unavailable',
        reviews = [],
        categories = [],
        description = 'Description unavailable'
    } = property || defaultProperty;

    return (
        <>
            <View style={globalStyles.rowBetween}>
                <Text value={name} color={'#1E1E1E'} h3 lightBold />
                <View style={{ flexDirection: 'row' }}>
                    <StarIcon fill={'#ECB526'} style={{ right: 8 }} />
                    <Text value={calculateAverageScore(reviews).toString()} regular title color={colors.text.quaternary} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {categories.map((category, index) => {
                    return (
                        <View key={index} style={styles.categoryContainer}>
                            <Text
                                value={category.name || 'Category unavailable'} medium button color={colors.text.quaternary}
                            />
                        </View>
                    )
                })}
            </View>
            <Text
                value={description} button regular color={colors.text.quaternary}
            />
            <Text value='Suggested duration' button medium color={colors.text.secondary} style={{ marginTop: 10 }} />
            <Text value='1-2 Hours' caption regular color={colors.text.lighSecondary} />
            <View style={styles.separator} />
        </>
    )
}

export default Overview

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: '#BFE5C8',
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 10,
        marginBottom: 5,
    },
    separator: {
        height: 4,
        backgroundColor: colors.bg.tertiary,
        width: WIDTH * 1.2,
        right: WIDTH * 0.2,
        marginTop: 10,
    }
})
